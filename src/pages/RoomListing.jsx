import roomData from "../sample.json"
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ThumbnailComponent from "../common/ThumbnailComponent";

import "../styles/RoomCard.css"

const RoomListing = () => {

    const { rooms_by_serial_no } = roomData

    const [{ serial_no, rooms }] = rooms_by_serial_no

    return (
        <Container className="room_listing_container">
            {
                rooms.map(room => {
                    {console.log(room.properties.video_url)
                    }
                    return (
                        <>
                            <Card key={room.room_type_code} className="room-card shadow-lg" style={{ width: '18rem',marginTop:"50px" }}>
                                
                                <ThumbnailComponent
                                    URL={room?.properties?.video_url?.med}
                                    poster="" 
                                    key={room.room_type_code}
                                    />

                                <Card.Body style={{ borderTop: "1px solid black" }}>
                                    <Card.Title>{}</Card.Title>
                                    <Card.Text>
                                        2 Adults
                                    </Card.Text>
                                    <Button variant="primary">See more</Button>
                                </Card.Body>

                            </Card>
                        </>
                    )
                })
            }



        </Container>
    )
}

export default RoomListing