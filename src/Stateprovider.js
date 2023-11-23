import React ,{ createContext, useReducer } from "react";

export const StateContext= createContext(null);
export const StateDispatchContext=createContext(null);

export const StateProvider =({children})=>{
    
    const [state,dispatch]=useReducer(reducer,initialState);
    
    
    return(
    <StateContext.Provider value={state}>
        <StateDispatchContext.Provider value={dispatch}>
        {children}
        </StateDispatchContext.Provider>
    </StateContext.Provider>
    )

}

function reducer(state,action){
    console.log(action)

    switch(action.type){
        case 'ADD_TO_CART':

            return{
                ...state,
                cart: [...state.cart, action.item],

            }
        
        case 'REMOVE_FROM_CART':
            const index=state.cart.findIndex((item)=> item.title===action.title);
            if (index >= 0) {
                const newCart = [...state.cart.slice(0, index), ...state.cart.slice(index + 1)];
                return {
                    ...state,
                    cart: newCart
                };
            }
            else{
                console.warn(`The product (title:${action.title}) is not in the cart !`)
                return state;
            }
            
            
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        default:{
            throw Error('Unknown action: ' + action.type);
        }
        };
    }

const initialState={
        cart:[],
        user:null,
    };
