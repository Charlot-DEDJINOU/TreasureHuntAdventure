import { useState } from "react";
import { Container , Form ,  Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import RedirectionVersSite from "../../layout/Forward";
import batimentE from "../../../assets/batimentE.jpg"

function BatimentE() {

    const {
        register,
        handleSubmit,
      } = useForm();

    const [show , setShow] = useState("")

    const handleResponse = (data) => {
        const answer = data.reponse.toLowerCase()

        if(answer.includes('residence bid e') === true){
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
                <p>Au cœur d'une vente aux enchères animée, les participants rivalisent pour remporter la <i>residence</i> de leurs rêves. Les enchères montent rapidement alors que chaque <i>bid</i> prononcé révèle le désir ardent d'appeler cet endroit leur chez-soi. La tension dans la salle atteint son paroxysme lorsque le commissaire-priseur annonce que la <i>residence</i> convoitée est également accompagnée d'une série d'avantages exclusifs. Parmi les murmures d'excitation, la lettre <i>E</i> brillamment éclairée sur le tableau d'affichage signale le début d'une série d'enchères électroniques qui ajouteront une touche innovante à l'événement. Les regards avides se croisent, les offres s'enchaînent, et la <i>residence</i> devient non seulement un lieu de vie, mais aussi le témoin d'une compétition palpitante.</p>
            </div>
            <div className="mb-3">
                <h3>Directive 2</h3>
                <ul>
                    <li>Je suis en trois mots</li>
                    <li>Je suis sur le campus d'Abomey-Calavi</li>
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
                    <h2 className="mb-3">Residence Bid E</h2>
                    <img src={batimentE} alt="batimentE" className="mb-3"/>
                    <div className="d-flex justify-content-between mb-3" style={{width : '80%'}}>
                            <h1>0</h1>
                            <h1>4</h1>
                    </div>
                    <Button variant="primary" className="location" type="submit" onClick={() => RedirectionVersSite("https://maps.app.goo.gl/UoWktE2wMdpXHsuu8")}>
                        Localiser
                    </Button>
                </div>
            }
        </Container>
    )
}

export default BatimentE