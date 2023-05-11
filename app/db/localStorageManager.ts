
export type CartProduct = {
    name:string,
}


export function LocalStorageManager (setCart:Function) {

    if ( !window.localStorage.getItem("cart-weedy") ) {
        window.localStorage.setItem("cart-weedy", JSON.stringify({}))
        setCart({})
    } else {
        setCart(JSON.parse(window.localStorage.getItem("cart-weedy") || "{}"));
    }
  
}


export function removeToCart(productId:any, setCart:Function ) {
    
        let cart = JSON.parse(window.localStorage.getItem("cart-weedy") || "{}");
    
        if ( Object.keys(cart).length !== 0 ) {
                
                if ( cart[productId] ) {
                    delete cart[productId];
                }
        
                window.localStorage.setItem("cart-weedy", JSON.stringify(cart));

                if ( setCart && setCart instanceof Function ) {
                    setCart(cart);
                }
        }
}

export function addToCart (product:any, setCart:Function) {

    let cart = JSON.parse(window.localStorage.getItem("cart-weedy") || "{}");

    if ( Object.keys(cart).length !== 0 ) {
            
            if ( cart[product.name] ) {
                cart[product.name].quantity += 1;
            } else {
                cart[product.name] = {
                    name: product.name,
                    quantity: 1,
                }
            }
    
            window.localStorage.setItem("cart-weedy", JSON.stringify(cart));
            setCart(cart);
        
    } else {

        let newCart = {
            [product.name]: {
                name: product.name,
                quantity: 1,
            }
        }

        window.localStorage.setItem("cart-weedy", JSON.stringify(newCart));

        setCart(newCart);

    }
}