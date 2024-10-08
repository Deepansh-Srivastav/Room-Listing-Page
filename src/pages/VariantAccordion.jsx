import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import "../styles/Accordion.css"
import { useState } from 'react';
import VariantCard from '../common/VariantsCard';
import PropTypes from 'prop-types';

function ContextAwareToggle({ children, eventKey, callback }) {

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    return (
        <button
            type="button primary"
            onClick={decoratedOnClick}
            className="btn btn-primary"
        >
            {children}
        </button>

    );
}

export default function VariantAccordion({ variants }) {

    const [isDataLoaded, setIsDataLoaded] = useState(false)

    function dataLoadingHandler() {
        setIsDataLoaded(true)
    }

    return (
        <Accordion className='variant-accordion'>

            <Card className="custom-card">

                <Card.Header className="custom-card-header">

                    <ContextAwareToggle eventKey="0" callback={dataLoadingHandler}>See All Variants</ContextAwareToggle>

                </Card.Header>

                <Accordion.Collapse eventKey="0">

                    <Card.Body className="custom-card-body">

                        {isDataLoaded ? (
                            variants.map((variant, index) => {
                                return <VariantCard {...variant} index={index} key={variant.variant_id} />
                            })
                        ) : null}

                    </Card.Body>

                </Accordion.Collapse>

            </Card>

        </Accordion>
    );
}

VariantAccordion.propTypes = {
    variants: PropTypes.arrayOf(
        PropTypes.shape({
            variant_id: PropTypes.string.isRequired,
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
        })
    ).isRequired,
};
