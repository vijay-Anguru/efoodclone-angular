import { Injectable } from '@angular/core';
import { Cart } from '../shared/model/Cart';
import { Foods } from '../shared/model/food';
import { cartItem } from '../shared/model/cartItem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  
private cart:Cart = new Cart();
  constructor() { }

  addToCart(food: Foods): void {
    const existingCartItem = this.cart.items.find(item => item.food.id === food.id);
    if (existingCartItem) {
      this.changeQuantity(existingCartItem.quantity + 1, food.id); 
      return;
    }
    this.cart.items.push(new cartItem(food)); 
  }
  
  removeFromCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(item=>item.food.id != foodId)
  }

  changeQuantity(quantity:number, foodId:number){
    let cartItem = this.cart.items.find(item=> item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }
  getcart():Cart{
    return this.cart;
  }
}
