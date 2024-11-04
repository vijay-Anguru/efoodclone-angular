import { cartItem } from './../shared/model/cartItem';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/model/Cart';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
cart!:Cart;
cartItem: any;
  constructor(private CartService:CartService, private fd:FoodService) {
  
    this.setCart();
   }

  ngOnInit(): void {
  }
  setCart(){
    this.cart = this.CartService.getcart();
  }
  removeFormCart(cartItem:cartItem){
    this.CartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:cartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.CartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }

}
