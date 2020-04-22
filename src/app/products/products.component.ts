import { Component, OnInit } from '@angular/core';
import { ProdServiceService } from './prod-service.service';
import { Observable } from 'rxjs';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$ : Observable<Product[]>;

  constructor(private prodServiceService:ProdServiceService) { }

  ngOnInit() {
    this.products$ = this.prodServiceService.getProducts();

    

  }

}