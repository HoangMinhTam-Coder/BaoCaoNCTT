import { Component , OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { addProduct } from '../cart-state-store/cart.action';
import { Product } from './../entity/product';

export const PRODUCTS = [ {
  id: 1,
  name: "Iphone 14 Pro Max",
  description: "Mẫu điện thoại mới ra mắt hiện nay!",
  price: 119.9,
  image: "https://dealntechcdn.b-cdn.net/wp-content/uploads/2021/06/Apple-iPhone-14-Pro-Max-represents.jpg",
}, {
  id: 2,
  name: "Red Magic 5G",
  description: "Điện thoại dành cho game thủ!",
  price: 200.0,
  image: "https://th.bing.com/th/id/R.6963f6faa6b0065369cd8e9dedab5849?rik=c3NGPJ1Bk1j52g&pid=ImgRaw&r=0",
}, {
  id: 3,
  name: "Redmi Note 11 Pro Plus",
  description: "Mẫu điện thoại mới nhất và mạnh nhất của nhà Xiaomi!",
  price: 180.0,
  image: "https://th.bing.com/th/id/R.f352b211d8a0989144b7c70648f9bdbe?rik=%2fdbhqMvp8DwqvA&pid=ImgRaw&r=0",
}]

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  public products(): Product[] {
    return PRODUCTS
  }

  public buyProduct(product: Product) {
    this.store.dispatch(addProduct(product));
  }
}
