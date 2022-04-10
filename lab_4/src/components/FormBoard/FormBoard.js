import { Container, Row, Col } from 'react-bootstrap';
import UserForm from './UserForm/UserForm'
import PlayBoard from './PlayBoard/PlayBoard'

function FormBoard() {
    return (
        <Container>
            <Row>
                <Col>
                    <UserForm/>
                </Col>
                <Col>
                    <PlayBoard/>
                </Col>
            </Row>
        </Container>
    );
}

export default FormBoard;