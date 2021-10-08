import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdminService } from 'app/admin/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private title: Title, private adminService: AdminService) {}

  ngOnInit(): void {
    this.title.setTitle('Admin');
  }
}
