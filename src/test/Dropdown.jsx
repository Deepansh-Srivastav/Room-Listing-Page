import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

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

export default function VariantDropdown() {
    return (
        <Accordion className=''>
            <Card>
                <Card.Header >
                    <ContextAwareToggle eventKey="0">See All Variants</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        Variant 1<br/>
                        Variant 2<br/>
                        Variant 3<br/>
                        Variant 4<br/>
                    
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

