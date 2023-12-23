import { useState } from "react";
import { Container , Form ,  Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import RedirectionVersSite from "../layout/Forward";
import obamaCenter from "../../assets/obamaCenter.jpg"
import obamaCenterTreasure from "../../assets/obamaCenterTreasure.jpg"

function Obama() {

    const {
        register,
        handleSubmit,
    } = useForm();

    const [show , setShow] = useState("")

    const handleResponse = (data) => {
        const answer = data.reponse.toLowerCase()

        if(answer === 'obama') {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }

    return (
        <Container className="mt-5">
            <div class="mb-3">
            <h3>Devinette - Trouver le nom</h3>
            <ul>
                <li>Je suis une personne, célèbre et puissante,</li>
                <li>Né à Hawaï, de parents différents.</li>
                <li>J'ai dirigé un pays avec charisme,</li>
                <li>De 2009 à 2017, mon nom résonne avec dynamisme.</li>
            </ul>
            </div>

            <div class="mb-3">
            <h3>Directive supplémentaire</h3>
            <ul>
                <li>Mon premier nom est un palindrome,</li>
                <li>Mon deuxième prénom signifie "béni" en arabe,</li>
                <li>Ensemble, je suis une figure politique respectée.</li>
            </ul>
            </div>

            <div class="mb-3">
            <h3>Directive 2</h3>
            <ul>
                <li>J'ai remporté le prix Nobel de la paix en 2009,</li>
                <li>Mon nom de famille commence par la lettre "O",</li>
                <li>Durant mon mandat, "Yes, we can" était notre cri.</li>
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
                    <h2 className="mb-3">OBAMA center</h2>
                    <img src={obamaCenter} alt="gbios" className="mb-3"/>
                    <img src={obamaCenterTreasure} alt="gbios" className="mb-3"/>
                    <Button variant="primary" className="location" type="submit" onClick={() => RedirectionVersSite("https://maps.app.goo.gl/2etCeKAYPVT3iWx98")}>
                        Localiser
                    </Button>
                </div>
            }
        </Container>
    )
}

export default Obama