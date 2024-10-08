import { createContext } from "react";
import { useState } from "react";

export const RoomListingPageContext = createContext({
    glovalStateValue:0,
    number:0
})


export default function RoomListingPageProvider({children}){
    

    const value = {
    }

    return(
        <RoomListingPageContext.Provider value={value}>
            {children}
        </RoomListingPageContext.Provider>
    )   
}


