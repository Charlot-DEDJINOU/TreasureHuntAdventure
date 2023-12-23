import { useState } from "react";
import { Container , Form ,  Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import RedirectionVersSite from "../../layout/Forward";
import viceRectoratTreasure from "../../../assets/viceRectoratTreasure.jpg"
import viceRectorat from "../../../assets/viceRectorat.jpg"

function ViceRectorat() {

    const {
        register,
        handleSubmit,
      } = useForm();

    const [show , setShow] = useState("")

    const handleResponse = (data) => {
        const answer = data.reponse.toLowerCase()

        if(answer.includes('nenuphar') === true ) {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }

    return (
        <Container className="mt-5">
            <div className="mb-3">
                <h3>Directives</h3>
                <ul>
                    <li>Mon premier est au milieu de la figure.</li>
                    <li>Mon deuxième est le contraire d'habillé</li>
                    <li>Mon troisième dirige les bateaux en mer la nuit.</li>
                    <li>Mon tout est une fleur sur l’eau.</li>
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
                    <h2 className="mb-3">Vice Rectorat des affaires academique</h2>
                    <img src={viceRectorat} alt="viceRectorat" className="mb-3"/>
                    <img src={viceRectoratTreasure} alt="viceRectorat" className="mb-3"/>
                    <Button variant="primary" className="location" type="submit" onClick={() => RedirectionVersSite("https://maps.app.goo.gl/ehuXQ4EeqVmHFvMA8")}>
                        Localiser
                    </Button>
                </div>
            }
        </Container>
    )
}

export default ViceRectorat