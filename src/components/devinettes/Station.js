import { useState } from "react";
import { Container , Form ,  Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import RedirectionVersSite from "../layout/Forward";
import stationTreasure from "../../assets/stationTreasure.jpg"
import station from "../../assets/station.jpg"

function Station() {

    const {
        register,
        handleSubmit,
      } = useForm();

    const [show , setShow] = useState("")

    const handleResponse = (data) => {
        const answer = data.reponse.toLowerCase()

        if(answer === 'station') {
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
                <p>Entre les rues animées et le va-et-vient perpétuel,
                    Trouvez le point d'arrêt, secret universel.
                    Attendez le carrosse métallique qui danse sur les routes,
                    Le trésor vous attend, là où le moteur redémarre et écoute.
                </p>
            </div>
            <div className="mb-3">
                <h3>Directive 2</h3>
                <ul>
                    <li>Je suis en un mot</li>
                    <li>Je compte 07 lettres</li>
                    <li>Je peux être découper en trois syllabes</li>
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
                    <h2 className="mb-3">Station</h2>
                    <img src={station} alt="station" className="mb-3"/>
                    <img src={stationTreasure} alt="station" className="mb-3"/>
                    <Button variant="primary" className="location" type="submit" onClick={() => RedirectionVersSite("https://maps.app.goo.gl/bpQvjtFHGuYQs9Yj7")}>
                        Localiser
                    </Button>
                </div>
            }
        </Container>
    )
}

export default Station