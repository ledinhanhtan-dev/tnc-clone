import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from './models/store.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  private storeSub!: Subscription;
  store!: Store;

  constructor(private title: Title, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.storeSub = this.route.data.subscribe(data => {
      this.store = data[0];
      this.title.setTitle(this.store.name);
    });
  }

  ngOnDestroy(): void {
    if (this.storeSub) this.storeSub.unsubscribe();
  }
}
