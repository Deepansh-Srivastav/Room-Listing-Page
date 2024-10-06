import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './common/Header';
import RoomList from './test/RoomList';
// import RoomListing from './pages/RoomListing';

const App = () => {
  return (
    <>
      <Header />
      {/* <RoomListing /> */}
      <RoomList/>
    </>
  )
}

export default App