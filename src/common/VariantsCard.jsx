import Card from 'react-bootstrap/Card';
let times = 1

export default function VariantCard({name}) {
    console.log("Now the card is created-", times);
    
    return (
        <Card className='w-100 my-3'>
            <Card.Body>
                <Card.Title>name</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}