import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './common/Header';
import RoomList from './test/RoomList';
// import RoomListing from './pages/RoomListing';
import roomData from "./data/Data.json"

const App = () => {


  const { rooms_by_serial_no } = roomData;
  const [{ rooms }] = rooms_by_serial_no;

  return (
    <>
      <Header />
      {/* <RoomListing /> */}
      <RoomList rooms= {rooms} />
    </>
  )
}

export default App