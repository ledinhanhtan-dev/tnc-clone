import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from 'app/checkout/services/checkout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss'],
})
export class CheckoutFormComponent implements OnInit, OnDestroy {
  @ViewChild('form') formRef!: ElementRef;
  private checkoutSub!: Subscription;
  sameShippingInfo: boolean = false;

  checkoutForm!: FormGroup;

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        this.phoneNumberValidator,
      ]),
      address: new FormControl('', [Validators.required]),

      sameShippingInfo: new FormControl(false),
      shippingName: new FormControl('', [Validators.required]),
      shippingPhone: new FormControl('', [
        Validators.required,
        this.phoneNumberValidator,
      ]),
      shippingAddress: new FormControl('', [Validators.required]),
      shippingNote: new FormControl(''),

      // FIX: radio
      paymentMethod: new FormControl(true),
    });

    this.checkoutSub = this.checkoutService.checkout$.subscribe(() => {
      this.onSubmit();
    });
  }

  ngOnDestroy(): void {
    if (this.checkoutSub) this.checkoutSub.unsubscribe();
  }

  populate() {
    this.checkoutForm.setValue({
      name: 'Gentek',
      email: 'gentek@citizen',
      phone: '0327730067',
      address: '01 Hà Nội',

      sameShippingInfo: false,
      shippingName: 'Gentek',
      shippingPhone: '0327730067',
      shippingAddress: '01 Hà Nội',
      shippingNote:
        'This makes composing complex form models easier to maintain',
      paymentMethod: true,
    });
  }

  onSubmit() {
    if (!this.checkoutForm.valid) {
      (this.formRef.nativeElement as HTMLFormElement).classList.add('invalid');
      this.focusOnFirstInvalidInput();
    } else {
      this.checkoutService.checkout(this.checkoutForm.value);
    }
  }

  onInputChange() {
    const formEl = this.formRef.nativeElement as HTMLFormElement;

    if (formEl.classList.contains('invalid')) {
      formEl.classList.remove('invalid');
    }
  }

  toggleShippingOther() {
    this.sameShippingInfo = !this.sameShippingInfo;

    if (this.sameShippingInfo) {
      this.checkoutForm.get('shippingName')?.setValidators(null);
      this.checkoutForm.get('shippingPhone')?.setValidators(null);
      this.checkoutForm.get('shippingAddress')?.setValidators(null);
      this.checkoutForm.get('shippingName')?.setErrors(null);
      this.checkoutForm.get('shippingPhone')?.setErrors(null);
      this.checkoutForm.get('shippingAddress')?.setErrors(null);
    } else {
      this.checkoutForm
        .get('shippingName')
        ?.setValidators([Validators.required]);
      this.checkoutForm
        .get('shippingPhone')
        ?.setValidators([Validators.required]);
      this.checkoutForm
        .get('shippingAddress')
        ?.setValidators([Validators.required]);
    }
  }

  private focusOnFirstInvalidInput() {
    const invalidControl = (
      this.formRef.nativeElement as HTMLFormElement
    ).querySelector('.ng-invalid');
    if (invalidControl) {
      (invalidControl as HTMLInputElement).focus();
    }
  }

  private phoneNumberValidator(
    control: FormControl
  ): { [key: string]: boolean } | null {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const validNumber = (control.value as string).match(phoneRegex);

    if (!validNumber) return { invalidPhoneNumber: true };
    else return null;
  }
}
