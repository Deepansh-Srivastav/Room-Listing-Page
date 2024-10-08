import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { BeatLoader, MoonLoader } from 'react-spinners';
import { Container } from 'react-bootstrap';
import "../styles/RoomCard.css";
import _ from 'lodash';
import { useContext } from 'react';
import { RoomListingPageContext } from '../store/Room_Listing_Page_Context';
const RoomCard = React.lazy(() => import('./RoomCard')); // Lazy load RoomCard Component 

export default function RoomListingPage({ rooms }) {

    // Function to load more rooms when user scrolls down the page

    const {
        visibleRooms,
        displayedRooms,
        setDisplayedRooms,
        isLoading,
        hasMoreRooms,
        setHasMoreRooms,
        handleScroll
    } = useContext(RoomListingPageContext)


    // Update displayed rooms when visibleRooms state changes
    useEffect(() => {
        setDisplayedRooms(rooms.slice(0, visibleRooms));

        // Check if there are more rooms to display
        if (visibleRooms >= rooms.length) {
            setHasMoreRooms(false); // No more rooms available
        }
    }, [visibleRooms, rooms]);


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

            {isLoading && hasMoreRooms && <MoonLoader color='#428bca' size={50} />} {/* Only show loader if there are more rooms */}
        </Container>
    );
}