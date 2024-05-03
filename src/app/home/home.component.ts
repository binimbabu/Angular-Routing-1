import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList : any;
  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.productService.getProductList().subscribe(res =>{
      this.productList = res
      console.log(this.productList);
    })
  }
}
