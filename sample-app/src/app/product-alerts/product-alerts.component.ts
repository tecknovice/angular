import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: []
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() outputevent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
