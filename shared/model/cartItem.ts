import { Foods } from "./food";

export class cartItem {
constructor (food:Foods){
    this.food=food;
    this.Price;
}


    food:Foods;
    quantity: number =1;
    get Price():number{
        return this.food.price * this.quantity;
    }
}