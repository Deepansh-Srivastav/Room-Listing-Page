import Card from 'react-bootstrap/Card';
import VariantAccordion from "./VariantAccordion"
import ThumbnailComponent from "../common/ThumbnailComponent";
import { IoIosBed } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { useMemo } from 'react';

export default function RoomCard({ room }) {

    // Assigning the thumbnailTypeFlag to video or image conditionally
    let thumbnailType = useMemo(() => {
        return (room.properties.video_url && room.properties.video_url.med ? "VIDEO" : "IMAGE")
    },[room])

    // returning JSX conditionally and storing it in the usememo to avoid unnecessary rerenders
    const Thumbnail = useMemo(() => {
        return (
            thumbnailType === "VIDEO" ?
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
                />
        )
    },[thumbnailType, room])

    return (
        <Card style={{ width: '100%', maxWidth: "24rem", margin: "25px 0 30px 0" }}>

            {Thumbnail}

            <Card.Body>
                <Card.Title>{room.name}</Card.Title>

                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ad ex repudiandae voluptate.
                </Card.Text>
                <Card.Text>
                    <IoIosBed style={{ margin: "0 10px 0 0" }} />
                    {room?.properties?.bed_type} BED
                </Card.Text>

                <Card.Text>
                    <IoPerson style={{ margin: "0 10px 0 0" }} />
                    {room?.properties?.room_capacity?.max_adult} Adults
                </Card.Text>

                <VariantAccordion variants={room?.variants || []} />
            </Card.Body>
        </Card>
    );
}