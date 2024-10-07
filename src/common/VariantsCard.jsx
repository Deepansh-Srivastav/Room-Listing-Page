// import Card from 'react-bootstrap/Card';
// import { v4 as uuidv4 } from 'uuid';

// export default function VariantCard({ name, display_properties, total_price, index }) {

//     return (
//         <Card className='w-100 my-3'>
//             <Card.Body>
//                 <Card.Title>Variant-{index + 1}</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>

//                 {display_properties?.map((property) => {
//                     return (
//                         <Card.Text key={uuidv4()}>
//                             - <b> {property?.display_name}</b> : {property?.value}
//                         </Card.Text>
//                     )
//                 })}
//                 <Card.Text key={uuidv4()}>
//                     - <b>Discounted Price</b> : {total_price?.currency} {total_price?.discounted_price_rounded}
//                 </Card.Text>



//             </Card.Body>
//         </Card>
//     );
// }





import Card from 'react-bootstrap/Card';
import { v4 as uuidv4 } from 'uuid';

export default function VariantCard({ name, display_properties, total_price, index }) {
    return (
        <Card className='w-100 my-3'>
            <Card.Body>
                <Card.Title className="h5 h6 h4">Variant-{index + 1}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted small">{name}</Card.Subtitle>

                {display_properties?.map((property) => {
                    return (
                        <Card.Text key={uuidv4()} className="small">
                            - <b>{property?.display_name}</b>: {property?.value}
                        </Card.Text>
                    );
                })}

                <Card.Text key={uuidv4()} className="small">
                    - <b>Discounted Price</b>: {total_price?.currency} {total_price?.discounted_price_rounded}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
