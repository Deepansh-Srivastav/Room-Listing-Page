// import { useState, useEffect } from 'react';
// import RoomCard from "./RoomCard"
// import roomData from "../sample.json"
// import { MoonLoader } from 'react-spinners';
// import { Container } from 'react-bootstrap';
// import "../styles/RoomCard.css"

// export default function RoomList() {

//     const { rooms_by_serial_no } = roomData;
//     const [{ rooms }] = rooms_by_serial_no;

//     const [visibleRooms, setVisibleRooms] = useState(4); // Initial 4 rooms
//     const [displayedRooms, setDisplayedRooms] = useState(rooms.slice(0, 4)); // Show 4 rooms
//     const [isLoading, setIsLoading] = useState(false);

//     // Function to load more rooms when user scrolls
//     const loadMoreRooms = () => {
//         setVisibleRooms((prevVisibleRooms) => prevVisibleRooms + 4);
//     };

//     // Update displayed rooms when `visibleRooms` changes
//     useEffect(() => {
//         setDisplayedRooms(rooms.slice(0, visibleRooms));
//     }, [visibleRooms, rooms]);

//     // Add scroll event listener to trigger loading more rooms
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50 && !isLoading) {

//                 if (displayedRooms.length <= rooms.length) {

//                     setIsLoading((previousLOadingStatus) => {
//                         return !previousLOadingStatus
//                     })

//                     setTimeout(() => {
//                         loadMoreRooms();
//                         setIsLoading((previousLOadingStatus) => {
//                             return !previousLOadingStatus
//                         })
//                     }, 500)
//                 }
//                 else{
//                     return
//                 }
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [isLoading]); // Add isLoading dependency

//     return (
//         <Container className="room-list room_listing_container">
//             {displayedRooms.map((room, index) => (
//                 <RoomCard key={`${room.room_type_code}-${index}`} room={room} />
//             ))}

//             {isLoading && <MoonLoader color='#428bca' size={50} />}
//         </Container>
//     );
// }

import { useState, useEffect, useCallback } from 'react';
import RoomCard from "./RoomCard";
import { MoonLoader } from 'react-spinners';
import { Container } from 'react-bootstrap';
import "../styles/RoomCard.css";
import _ from 'lodash';

export default function RoomList({rooms}) {

    const [visibleRooms, setVisibleRooms] = useState(4); // Initial 4 rooms
    const [displayedRooms, setDisplayedRooms] = useState(rooms.slice(0, 4)); // Show 4 rooms
    const [isLoading, setIsLoading] = useState(false);

    // Function to load more rooms when user scrolls
    const loadMoreRooms = () => {
        setVisibleRooms((prevVisibleRooms) => prevVisibleRooms + 4);
    };

    // Update displayed rooms when `visibleRooms` changes
    useEffect(() => {
        setDisplayedRooms(rooms.slice(0, visibleRooms));
    }, [visibleRooms, rooms]);

    // Throttled scroll event handler to prevent excessive calls
    const handleScroll = useCallback(
        _.throttle(() => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50 && !isLoading) {
                
                if (displayedRooms.length <= rooms.length) {
                    setIsLoading(true);

                    setTimeout(() => {
                        loadMoreRooms();
                        setIsLoading(false);
                    }, 500);
                }
            }
        }, 200), // 200ms delay between scroll events
        [isLoading, displayedRooms, rooms] // Dependencies to avoid stale closures
    );

    // Add scroll event listener to trigger loading more rooms
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]); // Ensure the latest throttled handler is added

    return (
        <Container className="room-list room_listing_container">
            {displayedRooms.map((room, index) => (
                <RoomCard key={`${room.room_type_code}-${index}`} room={room} />
            ))}

            {isLoading && <MoonLoader color='#428bca' size={50} />}
        </Container>
    );
}
