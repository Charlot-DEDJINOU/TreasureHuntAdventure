import { useState } from "react";
import { Container , Form ,  Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import RedirectionVersSite from "../../layout/Forward";
import idrissDebyTreasure from "../../../assets/idrissDebyTreasure.jpg"
import idrissDeby from "../../../assets/idrissDeby.jpeg"

function IdrissDeby() {

    const {
        register,
        handleSubmit,
      } = useForm();

    const [show , setShow] = useState("")

    const handleResponse = (data) => {
        const answer = data.reponse.toLowerCase()

        if(answer === 'hippopotame') {
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
                    <li className="mb-3">Je suis en un mot</li>
                    <li className="mb-3">Mon premier est la lettre I</li>
                    <li className="mb-3">Mon deuxième recouvre tout notre corps.</li>
                    <li className="mb-3">Mon troisième est un récipient.</li>
                    <li className="mb-3">Mon quatrième est un pronom possessif.</li>
                    <li className="mb-3">Mon cinquième est un pronom possessif.</li>
                    <li className="mb-3">Mon tout est un animal pas commode.</li>
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
                    <h2 className="mb-3">Amphi IDRISS DEBY</h2>
                    <img src={idrissDeby} alt="idrissDeby" className="mb-3"/>
                    <img src={idrissDebyTreasure} alt="idrissDeby" className="mb-3"/>
                    <Button variant="primary" className="location" type="submit" onClick={() => RedirectionVersSite("https://maps.app.goo.gl/UmsffxeHhkXh3Sys7")}>
                        Localiser
                    </Button>
                </div>
            }
        </Container>
    )
}

export default IdrissDeby