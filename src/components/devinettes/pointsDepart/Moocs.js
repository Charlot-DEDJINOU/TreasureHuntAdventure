import { useState } from "react";
import { Container , Form ,  Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import RedirectionVersSite from "../../layout/Forward";
import moocsTreasure from "../../../assets/moocsTreasure.jpg"
import moocs from "../../../assets/moocs.jpg"

function Moocs() {

    const {
        register,
        handleSubmit,
      } = useForm();

    const [show , setShow] = useState("")

    const handleResponse = (data) => {
        const answer = data.reponse.toLowerCase()

        if(answer === 'charade') {
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
                    <li>Je suis en un mot</li>
                    <li>Mon premier est un animal qui mange des souris</li>
                    <li>Mon deuxième est un animal qui vit dans les égouts.</li>
                    <li>Mon troisième est un chiffre entre un et cinq.</li>
                    <li>Mon tout est ce que je suis en train de faire.</li>
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
                    <h2 className="mb-3">Moocs</h2>
                    <img src={moocs} alt="moocs" className="mb-3"/>
                    <img src={moocsTreasure} alt="moocs" className="mb-3"/>
                    <Button variant="primary" className="location" type="submit" onClick={() => RedirectionVersSite("https://maps.app.goo.gl/UmsffxeHhkXh3Sys7")}>
                        Localiser
                    </Button>
                </div>
            }
        </Container>
    )
}

export default Moocs