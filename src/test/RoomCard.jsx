import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function RoomCard({ room }) {
    return (
        // <div className="room-card">
        //     <h3>{room.name}</h3>
        // </div>

        <Container className="room_listing_container" key={room.room_type_code}>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{room.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>



        </Container>
    );
}
export default RoomCard