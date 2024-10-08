import Card from 'react-bootstrap/Card';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export default function VariantCard({ name, display_properties, total_price, index }) {
    return (
        <Card className='w-100 my-3'>

            <Card.Body>

                <Card.Title className="h5 h6 h4">Variant-{index + 1}</Card.Title>

                <Card.Subtitle className="mb-2 text-muted small" >{name}</Card.Subtitle>

                {display_properties?.map((property) => {
                    return (
                        <Card.Text key={uuidv4()} className="small">
                            - <b>{property?.display_name}</b>: {property?.value}
                        </Card.Text>
                    );
                })}

                <Card.Text className="small" style={{ textDecoration: 'line-through' }}>
                    - <b>Price</b>: {total_price?.currency} {total_price?.total_price_rounded}
                </Card.Text>

                <Card.Text className="small">
                    - <b>Discounted Price</b>: {total_price?.currency} {total_price?.discounted_price_rounded}
                </Card.Text>

            </Card.Body>

        </Card>
    );
}


VariantCard.propTypes = {
    name: PropTypes.string.isRequired,

    display_properties: PropTypes.arrayOf(
        PropTypes.shape({
            display_name: PropTypes.string.isRequired,

            value: PropTypes.string.isRequired,
        })

    ).isRequired,

    total_price: PropTypes.shape({

        currency: PropTypes.string.isRequired,

        total_price_rounded: PropTypes.number.isRequired,

        discounted_price_rounded: PropTypes.number.isRequired,

    }).isRequired,

    index: PropTypes.number.isRequired,
};