import { useState } from "react";
import { Container , Form ,  Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import RedirectionVersSite from "../layout/Forward";
import gbiosTreasure from "../../assets/gbiosTreasure.jpg"
import gbios from "../../assets/gbios.jpg"

function Gbios() {

    const {
        register,
        handleSubmit,
      } = useForm();

    const [show , setShow] = useState("")

    const handleResponse = (data) => {
        const answer = data.reponse.toLowerCase()

        if(answer === 'gbios') {
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
                <p>Dans le royaume du savoir, où les microscopes règnent en maîtres,
                    Recherchez le repère des biologistes, des mystères à connaître.
                    Là où l'invisible devient visible, la vie se révèle en détails,
                    Le trésor attend dans ce lieu où la science est essentielle.
                </p>
            </div>
            <div className="mb-3">
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
                    <h2 className="mb-3">GBIOS</h2>
                    <img src={gbios} alt="gbios" className="mb-3"/>
                    <img src={gbiosTreasure} alt="gbios" className="mb-3"/>
                    <Button variant="primary" className="location" type="submit" onClick={() => RedirectionVersSite("https://maps.app.goo.gl/WUNpXswXJzK84QP27")}>
                        Localiser
                    </Button>
                </div>
            }
        </Container>
    )
}

export default Gbios