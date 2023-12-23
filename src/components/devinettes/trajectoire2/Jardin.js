import { useState } from "react";
import { Container , Form ,  Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import RedirectionVersSite from "../../layout/Forward";
import jardinBotanique from "../../../assets/jardinBotanique.jpg"
import jardinBotaniqueTreasure from "../../../assets/jardinBotaniqueTreasure.jpg"

function Jardin() {

    const {
        register,
        handleSubmit,
    } = useForm();

    const [show , setShow] = useState("")

    const handleResponse = (data) => {
        const answer = data.reponse.toLowerCase()

        if(answer.includes('jardin') === true) {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }

    return (
        <Container className="mt-5">
            <div class="mb-3">
            <h3>Trouver le mot</h3>
                <ul>
                    <li>Mon premier est là où la terre rencontre la mer,</li>
                    <li>Mon deuxième est le contraire de "dur".</li>
                    <li>Mon tout est un lieu plein de verdure,</li>
                    <li>Où l'on cultive et admire la nature.</li>
                    <li>Je suis en un mot</li>
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
                    <h2 className="mb-3">Jardin Botanique</h2>
                    <img src={jardinBotanique} alt="gbios" className="mb-3"/>
                    <img src={jardinBotaniqueTreasure} alt="gbios" className="mb-3"/>
                    <Button variant="primary" className="location" type="submit" onClick={() => RedirectionVersSite("https://maps.app.goo.gl/k31Asp6n9ZeRgWBt6")}>
                        Localiser
                    </Button>
                </div>
            }
        </Container>
    )
}

export default Jardin