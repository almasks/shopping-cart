import React, { useContext, useEffect, useReducer, useState } from "react";
import cartItem from './data.js'
import reducer from "./reducer.js";
const AppContext= React.createContext()
const initialState={
    loading:false,
    cart:cartItem,
    total:0,
    amount:0
}
 const AppProvider =({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)
    const clearCart=()=>{
        dispatch ({type:'CLEAR_CART'})
    }
    const remove=(id)=>{
        dispatch({type:'REMOVE',payload:id})
    }
    const increase=(id)=>{
        dispatch({type:'INCREASE',payload:id})
    }
    const decrease=(id)=>{
        dispatch({type:'DECREASE',payload:id})
    }
    const toggleAmount=(type,id)=>{
        dispatch({type:'TOGGLE_AMOUNT',payload:{id,type}})
       
    }
    useEffect(()=>{
        dispatch({type:'GET_TOTAL'})
    },[state.cart])
    return(
        <AppContext.Provider
        value={{...state,clearCart,remove,increase,decrease,toggleAmount}}>{children}</AppContext.Provider>
    )
}
export const useGlobalConttext=()=>{
    return useContext(AppContext)
}
export {
    AppContext,AppProvider
}