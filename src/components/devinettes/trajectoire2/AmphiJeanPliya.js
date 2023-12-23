import { useState } from "react";
import { Container , Form ,  Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import RedirectionVersSite from "../../layout/Forward";
import amphiAmoussouganTreasure from "../../../assets/amphiAmoussouganTreasure.jpg"
import amphiAmoussougan from "../../../assets/amphiAmoussougan.jpg"

function AmphiAmoussougan() {

    const {
        register,
        handleSubmit,
      } = useForm();

    const [show , setShow] = useState("")

    const handleResponse = (data) => {
        const answer = data.reponse.toLowerCase()

        if(answer === 'jean pliya') {
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
                    <li className="fst-italic mb-3">“Si la cadence d'un tam-tam change, il faut que change aussi le pas des danseurs.”</li>
                    <li className="fst-italic mb-3">“La vie d'un homme, fût-il esclave, est sacrée et personne n'a le droit de la supprimer ou même de se donner à mort.”</li>
                    <li className="fst-italic mb-3">“Les doigts sont inégaux, mais réunis ils font merveille.”</li>
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
                    <h2 className="mb-3">Amphi AMOUSSOUGAN</h2>
                    <img src={amphiAmoussougan} alt="gbios" className="mb-3"/>
                    <img src={amphiAmoussouganTreasure} alt="gbios" className="mb-3"/>
                    <Button variant="primary" className="location" type="submit" onClick={() => RedirectionVersSite("https://maps.app.goo.gl/tzTmyBTVGn5f3HXH9")}>
                        Localiser
                    </Button>
                </div>
            }
        </Container>
    )
}

export default AmphiAmoussougan