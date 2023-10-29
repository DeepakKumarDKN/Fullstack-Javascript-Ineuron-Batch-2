// What does reducer do .? 
// Jo action se hame data milta hai usko store ke andar push karta hai.

import {ADD_TO_CART} from '../Constant/ADD_TO_CART'


const initialState = {
    cardData:[]
}
export default function cardItems(state = initialState, action){
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cardData: action.data
            }
            break;
            default:
                return state

    }
}