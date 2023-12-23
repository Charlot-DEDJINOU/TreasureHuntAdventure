import { useState } from "react";
import { Container , Form ,  Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import RedirectionVersSite from "../../layout/Forward";
import poleInnovationTechnologie from "../../../assets/poleInnovationTechnologie.jpg"
import poleInnovationTechnologieTreasure from "../../../assets/poleInnovationTechnologieTreasure.jpg"

function PoleInnovationTechnologie() {

    const {
        register,
        handleSubmit,
      } = useForm();

    const [show , setShow] = useState("")

    const handleResponse = (data) => {
        const answer = data.reponse.toLowerCase()

        if(answer === 'pole innovation technologie') {
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
                <p>
                    Dans le vaste paysage de la recherche, le <i>pôle</i> dédié à l'<i>innovation</i> émerge comme une force motrice, propulsant l'évolution constante. Les esprits créatifs se rassemblent autour de ce <i>pôle</i>, alimentant une énergie dynamique où les idées prennent vie. La <i>technologie</i> devient alors le catalyseur de cette effervescence, offrant des possibilités infinies pour transformer l'<i>innovation</i> en réalité tangible. Au cœur de ce <i>pôle</i> d'excellence, les avancées <i>technologiques</i> tracent un chemin vers l'avenir, repoussant sans cesse les limites de ce qui est possible. C'est dans cette symbiose entre <i>pôle</i>, <i>innovation</i> et <i>technologie</i> que naissent les solutions révolutionnaires qui façonnent le monde de demain.</p>
            </div>
            <div className="mb-3">
                <h3>Directive 2</h3>
                <ul>
                    <li className="mb-3">Je suis en trois mots</li>
                    <li className="mb-3">Mon deuxième permet d'être concurent sur le marché</li>
                    <li className="mb-3">Je suis sur le campus d'Abomey-Calavi</li>
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
                    <h3 className="mb-3 text-center">Pôle de l'Innovation et de la Technologie à l'UAC</h3>
                    <img src={poleInnovationTechnologie} alt="poleInnovationTechnologie" className="mb-3"/>
                    <img src={poleInnovationTechnologieTreasure} alt="gbios" className="mb-3"/>
                    <Button variant="primary" className="location" type="submit" onClick={() => RedirectionVersSite("https://maps.app.goo.gl/WUNpXswXJzK84QP27")}>
                        Localiser
                    </Button>
                </div>
            }
        </Container>
    )
}

export default PoleInnovationTechnologie