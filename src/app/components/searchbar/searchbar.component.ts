import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../../providers/products.service';
import { Router } from "@angular/router/";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit {


  keyword:string = null;
  submitted:boolean = false;
  items:any[] = [];
  @Output() closeSearch = new EventEmitter;

  constructor(public products : ProductsService, public router: Router) { }

  ngOnInit() {
  }

  submit(e){
    e.preventDefault();
    if(this.keyword){
      this.submitted = true;
      this.products.search(this.keyword).then((items: any[]) => {
        this.items = items;
        if (items.length) this.submitted = false;
      })
    }
  }

  hideModal(){
    this.closeSearch.emit();
  }

  goTo(item){
    this.hideModal();
    this.router.navigate([item.route]);
    this.products.scrollTop();
  }

}
