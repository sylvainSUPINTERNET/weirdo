
import { makeObservable, observable, action } from 'mobx';



export type CartItem = {
    id: number;
    name:string;
}


export class CartShopping {

    items: CartItem[] = [];

    constructor() {
        makeObservable(this, {
            items: observable,
            addItem: action,
            removeItem: action,
        });
    }


    addItem(item: CartItem) {
        console.log("ok");
        this.items = [...this.items, item];
    }
    
    removeItem(item: CartItem) {
        this.items = this.items.filter((i) => i.id !== item.id);
    }

}