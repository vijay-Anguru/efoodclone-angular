import { cartItem } from "./cartItem";

export class Cart{
    items:cartItem[]=[];

    get totalPrice():number{
        let totalPrice =0;
        this.items.forEach(item =>{
            totalPrice += item.Price;
        });
        return totalPrice

    }
}