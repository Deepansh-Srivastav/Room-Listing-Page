import Card from 'react-bootstrap/Card';
import VariantAccordion from "./VariantAccordion"
import ThumbnailComponent from "../common/ThumbnailComponent";
import { IoIosBed } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

let thumbnailType = null

export default function RoomCard({ room }) {

    thumbnailType = (room.properties.video_url && room.properties.video_url.med ? "VIDEO" : "IMAGE")

    return (
        <Card style={{ width: '18rem', margin: "25px 0 30px 0" }} key={room.room_type_code}>
            {thumbnailType === "VIDEO" ?
                <ThumbnailComponent
                    URL={room?.properties?.video_url?.med}
                    poster=""
                    thumbnailType={thumbnailType}
                />
                :
                <ThumbnailComponent
                    URL={room?.properties?.room_images[0]?.image_urls}
                    poster=""
                    thumbnailType={thumbnailType}
                />}

            <Card.Body>
                <Card.Title>{room.name}</Card.Title>

                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ad ex repudiandae voluptate.
                </Card.Text>
                <Card.Text>
                    <IoIosBed style={{margin:"0 10px 0 0"}}/>
                    {room?.properties?.bed_type} BED
                </Card.Text>

                <Card.Text>
                    <IoPerson style={{margin:"0 10px 0 0"}}/>
                    {room?.properties?.room_capacity?.max_adult} Adults
                </Card.Text>

                <VariantAccordion variants = {room?.variants || [] }/>
            </Card.Body>
        </Card>
    );
}