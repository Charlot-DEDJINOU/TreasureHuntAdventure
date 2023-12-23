import { useState } from "react";
import { Container , Form ,  Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import RedirectionVersSite from "../../layout/Forward";
import conficiusTreasure from "../../../assets/conficiusTreasure.jpg"
import conficius from "../../../assets/conficius.jpg"

function Confucius() {

    const {
        register,
        handleSubmit,
      } = useForm();

    const [show , setShow] = useState("")

    const handleResponse = (data) => {
        const answer = data.reponse.toLowerCase()

        if(answer.includes('confucius') === true) {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }

    return (
        <Container className="mt-5">
            <div className="mb-3">
                <h3 className="mb-3">Directives</h3>
                <ul>
                    <li className="fst-italic mb-3">“Je ne cherche pas à connaître les réponses, je cherche à comprendre les questions.”</li>
                    <li className="fst-italic mb-3">“Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie.”</li>
                    <li className="fst-italic mb-3">“Quand on peut accomplir sa promesse sans manquer à la justice, il faut tenir sa parole.”</li>
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
                    <h2 className="mb-3">Conficius</h2>
                    <img src={conficius} alt="gbios" className="mb-3"/>
                    <img src={conficiusTreasure} alt="gbios" className="mb-3"/>
                    <Button variant="primary" className="location" type="submit" onClick={() => RedirectionVersSite("https://maps.app.goo.gl/tzTmyBTVGn5f3HXH9")}>
                        Localiser
                    </Button>
                </div>
            }
        </Container>
    )
}

export default Confucius