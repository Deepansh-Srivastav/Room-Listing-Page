import roomData from "../sample.json"
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import VideoComponent from "../common/VideoComponent";


const RoomListing = () => {
    const { rooms } = roomData.rooms_by_serial_no[0]

    console.log(rooms.length);


    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <VideoComponent
                    videoSrc="https://d1tf573zhz3zzy.cloudfront.net/data/content/videos/CantoTranscoded/720p/A+GIRL+WHO+BLOOMS/8a4r8hf2al6sd33kdrpsk54n6m.mp4"

                    poster=""
                />
                
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>           
        </Container>
    )
}

export default RoomListing