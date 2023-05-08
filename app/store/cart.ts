import { create } from 'zustand'
import { persist , createJSONStorage  } from 'zustand/middleware';

export interface CartItem {
  id: number;
  name: string;
  price: number;
}


export interface Cart {
  cart : Array<CartItem>;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}


// export const useCartStore = create<Cart>( 
//   (set, get) => ({
//   cart: [{id: 1, name: 'test', price: 10}],
//   addToCart: (item: CartItem) => {
//     set((state) => ({
//       cart: [...state.cart, item],
//     }));
//   },
//   removeFromCart: (id:number) =>
//     set((state) => ({
//       cart: state.cart.filter((item) => item.id !== id),
//     })),
// }));

/**
 * Persisted cart store into local storage ( using zustand/middleware )
 */
export const useCartStorePersist = create( persist(
  (set, get) => ({
    cart: [],

    addToCart: (item: CartItem) => {
      set((state:Cart) => ({
        cart: [...state.cart, item],
      }));
    },

    removeFromCart: (id:number) =>
      set((state:Cart) => ({
        cart: state.cart.filter((item:CartItem) => item.id !== id),
      })),

  }),
  {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage),
    onRehydrateStorage: state => {    }
  }
));
