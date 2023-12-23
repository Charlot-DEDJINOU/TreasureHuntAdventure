import { useState } from "react";
import { Container , Form ,  Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import RedirectionVersSite from "../../layout/Forward";
import aufTreasure from "../../../assets/aufTreasure.jpg"
import auf from "../../../assets/auf.jpg"

function Auf() {

    const {
        register,
        handleSubmit,
      } = useForm();

    const [show , setShow] = useState("")

    const handleResponse = (data) => {
        const answer = data.reponse.toLowerCase()

        if(answer.includes('auf') === true) {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }

    return (
        <Container className="mt-5">
            <div className="mb-3">
                <h3>Directive 1</h3>
                <p>
                    Par-delà les frontières, dans le monde des savoirs partagés,
                    Une agence veille, son trésor bien caché.
                    Entre les langues qui dansent, découvrez le message,
                    Le trésor est là où le francophone prend son ancrage.

                </p>
            </div>
            <div className="mb-3">
                <h3>Directive 2</h3>
                <ul>
                        <li>Je suis en un mot, une énigme à explorer,</li>
                        <li>Ma première partie est une lettre à repérer.</li>
                        <li>Un mot à 3 lettres, où la U est présente,</li>
                        <li>Là où l'université et la francophonie font leur danse.</li>
                </ul> 
            </div>
            <Form className="mb-3"  onSubmit={handleSubmit(handleResponse)}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fs-3 fw-medium">Reponse</Form.Label>
                    <Form.Control type="text" placeholder="reponse" {...register('reponse')}/>
                </Form.Group>
                {show === false && <p className="alert alert-danger">Votre réponse est incorrect</p>}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {
                show && 
                <div className="d-flex flex-column align-items-center">
                    <h2 className="mb-3">AUF</h2>
                    <img src={auf} alt="gbios" className="mb-3"/>
                    <img src={aufTreasure} alt="gbios" className="mb-3"/>
                    <Button variant="primary" className="location" type="submit" onClick={() => RedirectionVersSite("https://maps.app.goo.gl/CWLA3RVz2GT5Xc6D6")}>
                        Localiser
                    </Button>
                </div>
            }
        </Container>
    )
}

export default Auf