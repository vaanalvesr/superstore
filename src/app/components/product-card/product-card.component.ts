import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../providers/cart.service';
import { ProductsService } from '../../providers/products.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any = {};
  @Input() view: boolean = false;
  constructor(
    // instanciando nossos providers
    public products: ProductsService,
    public cart: CartService
  ) {

  }

  ngOnInit() {
  }
}
