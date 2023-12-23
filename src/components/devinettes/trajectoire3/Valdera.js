import { useState } from "react";
import { Container , Form ,  Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import RedirectionVersSite from "../../layout/Forward";
import valderaTreasure from "../../../assets/valderaTreasure.jpg"
import valdera from "../../../assets/valdera.jpg"

function Valdera() {

    const {
        register,
        handleSubmit,
      } = useForm();

    const [show , setShow] = useState("")

    const handleResponse = (data) => {
        const answer = data.reponse.toLowerCase()

        if(answer.includes('valdera') === true) {
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
                    <li className="mb-3">Mon premier est utilisé dans le foot pour prendre des décisions,</li>
                    <li className="mb-3">Mon deuxième est la lettre L, une évidence sans prétentions.</li>
                    <li className="mb-3">Mon troisième est un cube à six faces, numéroté avec raison,</li>
                    <li className="mb-3">Mon quatrième est un animal des égouts, souvent en scène dans les fictions.</li>
                    <li className="mb-3">Mon tout est sur le campus d'Abomey Calavi</li>
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
                    <h2 className="mb-3">Valdera</h2>
                    <img src={valdera} alt="gbios" className="mb-3"/>
                    <img src={valderaTreasure} alt="gbios" className="mb-3"/>
                    <Button variant="primary" className="location" type="submit" onClick={() => RedirectionVersSite("https://maps.app.goo.gl/96jK4qE9jSUAN5zG8")}>
                        Localiser
                    </Button>
                </div>
            }
        </Container>
    )
}

export default Valdera