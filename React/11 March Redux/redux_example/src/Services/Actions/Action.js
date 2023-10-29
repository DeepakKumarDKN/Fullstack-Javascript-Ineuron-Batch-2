// action react se data send karta hai store ke andar

import { ADD_TO_CART, WISHLIST_CART } from "../Constant"

export const addtoCart = (data) => {
    return{
        type: ADD_TO_CART,
        data:data
    }
}

export const wishlist = (data) => {
    return{
        type: WISHLIST_CART,
        data:data
    }
}