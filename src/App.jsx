import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './common/Header';
import RoomListingPage from './pages/RoomListingPage';
import roomData from "./data/Data.json"
import { useState, useEffect } from 'react';
import RoomListingPageProvider from './store/Room_Listing_Page_Context';

export default function App() {

  const { rooms_by_serial_no } = roomData;

  const [{ rooms }] = rooms_by_serial_no;

  const [error, setError] = useState(true)

  let errorMessage = "Sorry! No Rooms Available Right Now"

  // function to check the errors 
  function checkError() {
    if (!rooms || rooms.length === 0) {
      setError(true)
      return
    }
    else {
      setError(false)
      return
    }
  }

  // Executing the check error function when the component loads only for the first time 
  useEffect(() => {
    checkError();
  }, []);

  return (
    <RoomListingPageProvider>
      <Header />
      {error ? (<h2>{errorMessage}</h2>) : <RoomListingPage rooms={rooms} />}
    </RoomListingPageProvider>
  )
}