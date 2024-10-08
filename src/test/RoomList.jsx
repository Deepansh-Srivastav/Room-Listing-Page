import React,{ useState, useEffect, useCallback, Suspense } from 'react';
import { BeatLoader, MoonLoader } from 'react-spinners';
import { Container } from 'react-bootstrap';
import "../styles/RoomCard.css";
import _ from 'lodash';

const RoomCard = React.lazy(() => import('./RoomCard')); // Lazy load RoomCard Component 

export default function RoomList({ rooms }) {
    const [visibleRooms, setVisibleRooms] = useState(4); // Initial 4 rooms
    const [displayedRooms, setDisplayedRooms] = useState(rooms.slice(0, 4)); // Show 4 rooms
    const [isLoading, setIsLoading] = useState(false);

    // Function to load more rooms when user scrolls down the page
    const loadMoreRooms = () => {
        setVisibleRooms((prevVisibleRooms) => prevVisibleRooms + 4);
    };

    // Update displayed rooms when visibleRooms state changes
    useEffect(() => {
        setDisplayedRooms(rooms.slice(0, visibleRooms));
    }, [visibleRooms, rooms]);

    const handleScroll = useCallback(
        _.throttle(() => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 50 &&
                !isLoading
            ) {
                if (displayedRooms.length <= rooms.length) {
                    setIsLoading(true);

                    setTimeout(() => {
                        loadMoreRooms();
                        setIsLoading(false);
                    }, 500);
                }
            }
        }, 200),
        [isLoading, displayedRooms, rooms]
    );

    // Added scroll event listener to trigger loading more rooms
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <Container className="room-list room_listing_container">
            {displayedRooms.map((room, index) => (
                <Suspense fallback={<BeatLoader color='#428bca' size={30} />} key={`${room.room_type_code}-${index}`}>
                    <RoomCard room={room} />
                </Suspense>
            ))}

            {isLoading && <MoonLoader color='#428bca' size={50} />}
        </Container>
    );
}