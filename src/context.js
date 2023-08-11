import React, { useContext, useState } from "react";
import cartItem from './data.js'
const AppContext= React.createContext()
// const url='https://course-api.com/react-useReducer-cart-project'
 const AppProvider =({children})=>{
    const [cart,setCart]=useState(cartItem)
    return(
        <AppContext.Provider
        value={{cart}}>{children}</AppContext.Provider>
    )
}
export const useGlobalConttext=()=>{
    return useContext(AppContext)
}
export {
    AppContext,AppProvider
}