import { Injectable } from '@angular/core';

const PRODUCTS = require('./products.json');
const BASEURL = window.location.href.substring(0, window.location.href.length - 1);

import * as _ from 'lodash';
import * as $ from 'jquery';

@Injectable()
export class ProductsService {

  constructor() { }

  list(){
    return new Promise((resolve, reject) => {
      PRODUCTS.map((product, i) =>{
        product.titleSlug = _.kebabCase(product.name);
        product.route = '/products/' + product.titleSlug + '/' + product.id;
        product.url =   BASEURL + product.route;
      })
      resolve(PRODUCTS);
    })
  }

  view(id: any) {
    return new Promise((resolve, reject) => {
      this.list().then((products: any[]) => {
        let product = _.find(products, (p) => {
          return p.id == id;
        });
        // se tiver post resolve, senão rejeita
        console.log(product || JSON);
        return product ? resolve(product) : reject('product not found');
      });
    })
  }

  search(keyword:string){
    return new Promise((resolve, reject) => {
      this.list().then((products: any[]) =>{
        let items:any[];
        if(products.length){
          items = _.filter(products, (p) =>{
            return p.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase());
          });
        }
        resolve(items);
      })
      
    })
  }

  scrollTop(){
    $('html', 'body').animate({
      scrollTop: 0
    },0)
  }
}
