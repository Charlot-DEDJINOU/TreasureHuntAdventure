import { useState } from "react";
import { Container , Form ,  Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import RedirectionVersSite from "../../layout/Forward";
import laboratoireIne from "../../../assets/laboratoireIne.jpg"
import laboratoireIneTreasure1 from "../../../assets/laboratoireIneTreasure1.jpg"
import laboratoireIneTreasure from '../../../assets/laboratoireIneTreasure.jpg'

function Ine() {

    const {
        register,
        handleSubmit,
    } = useForm();

    const [show , setShow] = useState("")

    const handleResponse = (data) => {
        const answer = data.reponse.toLowerCase()

        if(answer === 'ine') {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }

    return (
        <Container className="mt-5">
            <div className="mb-3">
            <h3>Devinez le Mot</h3>
                <ul>
                    <li>Mon premier est la Xième lettre de l'alphabet français, où X est la solution de l'équation suivante : 2X² - 36X + 120 = -42.</li>
                    <li>Mon deuxième se retrouve deux fois dans l'année, une fois au Niger et une fois au Nigeria.</li>
                    <li>Mon troisième se trouve au milieu de la mer et au bout du monde.</li>
                    <li>Mon tout est un acronyme</li>
                </ul>
            </div>
            {/* <div className="mb-3">
                <h3>Directive 2</h3>
                <ul>
                    <li>Je suis en un mot</li>
                    <li>Ma première partie est en une seule lettre</li>
                    <li>Ma deuxième partie est célèbre dans le monde informatique,
                        Je suis le commencement, le lancement automatique.
                        Quand le système s'éveille après son repos profond,
                        Je suis le début, le point de départ, un moment fécond.
                    </li>
                </ul>
            </div> */}
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
                    <h2 className="mb-3">Laboratoire des sciences et technique de l'eau</h2>
                    <img src={laboratoireIne} alt="gbios" className="mb-3"/>
                    <img src={laboratoireIneTreasure} alt="gbios" className="mb-3"/>
                    <img src={laboratoireIneTreasure1} alt="gbios" className="mb-3"/>
                    <Button variant="primary" className="location" type="submit" onClick={() => RedirectionVersSite("https://maps.app.goo.gl/norrgpjN1mzcRn9J9")}>
                        Localiser
                    </Button>
                </div>
            }
        </Container>
    )
}

export default Ine