import { useState } from "react";
import { Container , Form ,  Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import RedirectionVersSite from "../../layout/Forward";
import decanatFSA from "../../../assets/decanatFSA.jpg"
import decanatTreasure from "../../../assets/decanatFSATreasure.jpg"

function DecanatFSA() {

    const {
        register,
        handleSubmit,
      } = useForm();

    const [show , setShow] = useState("")

    const handleResponse = (data) => {
        const answer = data.reponse.toLowerCase()

        if(answer === 'decanat fsa') {
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
                <p>Au cœur du campus universitaire, le <i>decanat</i> joue un rôle central en guidant et en supervisant les activités académiques de diverses facultés. Dans ce contexte, la <i>Faculté des Sciences Agronomiques (FSA)</i> se distingue comme un pôle d'excellence, formant la prochaine génération d'experts en sciences agricoles. Le <i>decanat</i> de la <i>FSA</i>, avec son équipe dévouée, travaille sans relâche pour assurer la qualité des programmes éducatifs et promouvoir la recherche novatrice dans le domaine de l'agronomie. Les étudiants de la <i>FSA</i> peuvent compter sur le soutien du <i>decanat</i> pour les orienter tout au long de leur parcours académique, contribuant ainsi à leur épanouissement professionnel. Ensemble, le <i>decanat</i> et la <i>FSA</i> incarnent l'engagement envers l'excellence académique et la promotion du savoir dans le domaine des sciences agronomiques.</p>
            </div>
            <div className="mb-3">
                <h3>Directive 2</h3>
                <ul>
                    <li className="mb-3">Je suis en deux mots</li>
                    <li className="mb-3">Mon deuxième est un acronyme</li>
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
                    <h2 className="mb-3">Decanat de la FSA</h2>
                    <img src={decanatFSA} alt="decanatFSA" className="mb-3"/>
                    <img src={decanatTreasure} alt="gbios" className="mb-3"/>
                    <Button variant="primary" className="location" type="submit" onClick={() => RedirectionVersSite("https://maps.google.com/?q=6.416652,2.341638&entry=gps")}>
                        Localiser
                    </Button>
                </div>
            }
        </Container>
    )
}

export default DecanatFSA