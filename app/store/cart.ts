import { create } from 'zustand'
import { persist , createJSONStorage  } from 'zustand/middleware';



// TODO:  Deprecated

// Can't work with nextjs due to SSR / CSR ( window.localStorage is not supported on SSR obviously ) so it's causing hydratation error 
// since CSR and SSR not matching for the rendering of the page ( VDOM )


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
