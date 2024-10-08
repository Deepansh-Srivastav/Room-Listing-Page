import { createContext } from "react";
import { useState, useCallback } from "react";
import roomData from "../data/Data.json"
import _ from 'lodash';

export const RoomListingPageContext = createContext({
    visibleRooms: 0,
    setVisibleRooms: () => { },
    displayedRooms: [],
    isLoading: false,
    setIsLoading: () => { },
    hasMoreRooms: true,
    setHasMoreRooms: () => { },
    rooms: [],
})


export default function RoomListingPageProvider({ children }) {

    const { rooms_by_serial_no } = roomData;

    const [{ rooms }] = rooms_by_serial_no;

    // Initial 4 rooms
    const [visibleRooms, setVisibleRooms] = useState(4);

    // Show 4 rooms
    const [displayedRooms, setDisplayedRooms] = useState(rooms.slice(0, 4));

    // Loading State
    const [isLoading, setIsLoading] = useState(false);

    // Track if more rooms are available
    const [hasMoreRooms, setHasMoreRooms] = useState(true);


    const value = {
        visibleRooms,
        setVisibleRooms,
        displayedRooms,
        setDisplayedRooms,
        isLoading,
        setIsLoading,
        hasMoreRooms,
        setHasMoreRooms
    };

    return (
        <RoomListingPageContext.Provider value={value}>
            {children}
        </RoomListingPageContext.Provider>
    )
}


