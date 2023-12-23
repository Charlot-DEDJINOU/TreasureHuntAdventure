import { useState } from "react";
import { Container , Form ,  Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import RedirectionVersSite from "../layout/Forward";
import maisonEnseignant from "../../assets/maisonEnseignant.jpg"
import maisonEnseignantTreasure from "../../assets/maisonEnseignantTreasure.jpg"

function Enseignant() {

    const {
        register,
        handleSubmit,
    } = useForm();

    const [show , setShow] = useState("")

    const handleResponse = (data) => {
        const answer = data.reponse.toLowerCase()

        if(answer === 'enseignant') {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }

    return (
        <Container className="mt-5">
            <div class="mb-3">
            <h3>Devinette Mathématique</h3>

            <ul>
            <li>Les solutions aux équations sont la position de chaque lettre formant le mot dans l'alphabet français</li>
            <li>
                Mon premier est la racine carrée du carré d'un nombre, et il vaut 5.
            </li>
            <li>
                Mon deuxième est la solution d'une équation quadratique{" "}
                <code>
                b<sup>2</sup> - 13b + 36 = 0
                </code>.
            </li>
            <li>
                Mon troisième est la solution d'une équation quadratique complexe{" "}
                <code>
                (
                <sup>c</sup>
                <sup>2</sup>
                / 2) - 5c + 25 = 0
                </code>.
            </li>
            <li>
                Mon quatrième est la solution d'une équation quadratique{" "}
                <code>
                d<sup>2</sup> + 4d - 45 = 0
                </code>.
            </li>
            <li>
                Mon cinquième est la solution d'une équation cubique{" "}
                <code>
                e<sup>3</sup> - 27 = 0
                </code>.
            </li>
            <li>
                Mon sixième est la solution d'une équation quadratique{" "}
                <code>
                f<sup>2</sup> - 14f + 49 = 0
                </code>.
            </li>
            <li>
                Mon septième est la solution d'une équation quadratique complexe{" "}
                <code>
                (
                <sup>g</sup>
                <sup>2</sup>
                / 2) - 10g + 100 = 0
                </code>.
            </li>
            <li>
                Mon huitième est la solution d'une équation quadratique{" "}
                <code>
                h<sup>2</sup> + h - 20 = 0
                </code>.
            </li>
            </ul>

            <p>Réunissez mes parties, et vous obtiendrez un mot qui décrit une personne jouant un rôle crucial dans la transmission du savoir. Quel est ce mot?</p>
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
                    <h2 className="mb-3">La Maison de L'enseignant</h2>
                    <img src={maisonEnseignant} alt="gbios" className="mb-3"/>
                    <img src={maisonEnseignantTreasure} alt="gbios" className="mb-3"/>
                    <Button variant="primary" className="location" type="submit" onClick={() => RedirectionVersSite("https://maps.app.goo.gl/DxrEXEbhLxhcrQdUA")}>
                        Localiser
                    </Button>
                </div>
            }
        </Container>
    )
}

export default Enseignant