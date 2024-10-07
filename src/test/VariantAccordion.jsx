import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import "../styles/Accordion.css"
import { useState } from 'react';
import VariantCard from '../common/VariantsCard';

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
                                return <VariantCard {...variant} index = {index} key={variant.variant_id} />
                            })
                        ) : null}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

