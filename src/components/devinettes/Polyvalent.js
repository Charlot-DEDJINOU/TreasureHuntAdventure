import { useState } from "react";
import { Container , Form ,  Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import RedirectionVersSite from "../layout/Forward";
import batimentPolyvalent from "../../assets/batimentPolyvalent.jpg"
import batimentPolyvalentTreasure from "../../assets/batimentPolyvalentTreasure.jpg"

function Polyvalent() {

    const {
        register,
        handleSubmit,
    } = useForm();

    const [show , setShow] = useState("")

    const handleResponse = (data) => {
        const answer = data.reponse.toLowerCase()

        if(answer === 'polyvalent') {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }

    return (
        <Container className="mt-5">
            <div class="mb-3">
            <h3>Devinette - Trouver le mot</h3>
                <ul>
                    <li>Je suis un mot qui décrit quelqu'un,</li>
                    <li>Habile et compétent, en tout point.</li>
                    <li>Dans divers domaines, je brille,</li>
                    <li>Nommez-moi, je suis celui qui s'adapte avec habilité.</li>
                </ul>
            </div>

            <div class="mb-3">
            <h3>Directive 1</h3>
                <ul>
                    <li>Ma première syllabe signifie "plusieurs" en grec,</li>
                    <li>Ma deuxième est un synonyme de "puissant",</li>
                    <li>Ensemble, je suis celui qui excelle partout.</li>
                </ul>
            </div>
            <div class="mb-3">
            <h3>Directive 2</h3>
                <ul>
                    <li>Mon premier est le préfixe qui signifie "plusieurs" ou "beaucoup",</li>
                    <li>Mon deuxième est le synonyme de "capable et compétent",</li>
                    <li>Mon tout désigne une personne versatile.</li>
                </ul>
            <div class="mb-3">
            <h3>Directive 3</h3>
                <ul>
                    <li>Ma première partie est le préfixe qui signifie "nombreux",</li>
                    <li>Ma seconde partie est un adjectif synonyme de "capable",</li>
                    <li>En me combinant, je décris une personne très compétente.</li>
                </ul>
            </div>
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
                    <h2 className="mb-3">Bâtiment polyvalent</h2>
                    <img src={batimentPolyvalent} alt="gbios" className="mb-3"/>
                    <img src={batimentPolyvalentTreasure} alt="gbios" className="mb-3"/>
                    <Button variant="primary" className="location" type="submit" onClick={() => RedirectionVersSite("https://maps.google.com/?q=6.422161,2.339430&entry=gps")}>
                        Localiser
                    </Button>
                </div>
            }
        </Container>
    )
}

export default Polyvalent