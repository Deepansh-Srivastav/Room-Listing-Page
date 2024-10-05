import roomData from "../sample.json"
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ThumbnailComponent from "../common/ThumbnailComponent";

import "../styles/RoomCard.css"

const RoomListing = () => {

    const { rooms_by_serial_no } = roomData

    const [{ rooms }] = rooms_by_serial_no

    let thumbnailType = null

    return (
        <Container className="room_listing_container">
            {
                rooms.map(room => {
                    { thumbnailType = room.properties.video_url && room.properties.video_url.med ? "VIDEO" : "IMAGE" }
                    return (
                        <>
                            <Card key={room.room_type_code} className="room-card shadow-lg" style={{ width: '18rem', marginTop: "50px" }}>

                                {thumbnailType === "VIDEO" ?
                                    <ThumbnailComponent
                                        URL={room?.properties?.video_url?.med}
                                        poster=""
                                        thumbnailType = {thumbnailType}
                                    />
                                    :
                                    <ThumbnailComponent
                                        URL={room?.properties?.room_images[0]?.image_urls}
                                        poster=""
                                        thumbnailType = {thumbnailType}
                                    />}

                                <Card.Body style={{ borderTop: "1px solid black" }}>
                                    <Card.Title>{ }</Card.Title>
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