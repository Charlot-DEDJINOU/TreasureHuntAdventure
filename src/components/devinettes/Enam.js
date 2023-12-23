import { useState } from "react";
import { Container , Form ,  Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import RedirectionVersSite from "../layout/Forward";
import enamTreasure from "../../assets/enamTreasure.jpg"
import enam from "../../assets/enam.jpg"

function Enam() {

    const {
        register,
        handleSubmit,
    } = useForm();

    const [show , setShow] = useState("")

    const handleResponse = (data) => {
        const answer = data.reponse.toLowerCase()

        if(answer === 'enam') {
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
                <p> Où les futurs dirigeants forgent leur destin,
                    Dans les salles de sagesse, un trésor est certain.
                    Écoles et connaissances tissent le fil du pouvoir,
                    Trouvez ce lieu où l'administration éclaire l'avenir.
                </p>
            </div>
            <div className="mb-3">
                <h3>Directive 2</h3>
                    <ul>
                        <li>Je suis une institution éducative.</li>
                        <li>Ma première lettre est au mulieux de la mer et au bout du monde.</li>
                        <li>Je forme les futurs administrateurs et magistrats.</li>
                        <li>Mon acronyme est souvent utilisé et est découpable en trois slabe</li>
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
                    <h2 className="mb-3">ENAM</h2>
                    <img src={enam} alt="gbios" className="mb-3"/>
                    <img src={enamTreasure} alt="gbios" className="mb-3"/>
                    <Button variant="primary" className="location" type="submit" onClick={() => RedirectionVersSite("https://maps.app.goo.gl/TzfBUPn75SGv7AbaA")}>
                        Localiser
                    </Button>
                </div>
            }
        </Container>
    )
}

export default Enam