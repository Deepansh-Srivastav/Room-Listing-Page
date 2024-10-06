import { useState, useEffect } from 'react';
import RoomCard from "./RoomCard"
import roomData from "../sample.json"
import { BeatLoader } from 'react-spinners';

export default function RoomList() {

    const { rooms_by_serial_no } = roomData;
    const [{ rooms }] = rooms_by_serial_no;

    const [visibleRooms, setVisibleRooms] = useState(4); // Initial 4 rooms
    const [displayedRooms, setDisplayedRooms] = useState(rooms.slice(0, 4)); // Show 4 rooms
    const [isLoading, setIsLoading] = useState(false);

    console.log("Total cards are- ", displayedRooms.length);

    // Function to load more rooms when user scrolls
    const loadMoreRooms = () => {
        setVisibleRooms((prevVisibleRooms) => prevVisibleRooms + 4);
    };

    // Update displayed rooms when `visibleRooms` changes
    useEffect(() => {
        setDisplayedRooms(rooms.slice(0, visibleRooms));
    }, [visibleRooms, rooms]);

    // Add scroll event listener to trigger loading more rooms
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50 && !isLoading) {

                if (displayedRooms.length <= rooms.length) {

                    setIsLoading((previousLOadingStatus) => {
                        return !previousLOadingStatus
                    })

                    setTimeout(() => {
                        loadMoreRooms();
                        setIsLoading((previousLOadingStatus) => {
                            return !previousLOadingStatus
                        })
                    }, 500)
                }
                else{
                    return
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]); // Add isLoading dependency

    return (
        <div className="room-list">
            {displayedRooms.map((room, index) => (
                <RoomCard key={`${room.room_type_code}-${index}`} room={room} />
            ))}

            {isLoading && <BeatLoader />}
        </div>
    );
}