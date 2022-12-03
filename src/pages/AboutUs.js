import NewNav from "../components/NewNav";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutUs() {
    return (
        <>
            <NewNav />
            <div class="about-section">
                <h1>About Us Page</h1>
                <p>Finding Books Easy</p>
                <p>We are determined to make it easier for college students to find books and remedy the issue of high college costs.
                    Through lending and donating, books will be made accessible and affordable.
                </p>
            </div>

            <h2 className="team-h2">Our Team</h2>
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        <div class="card">
                            <div class="container">
                                <h2 className="names">Oumar Siby</h2>
                                <p class="title">Software Developer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>oumar@example.com</p>
                                <p><button class="button">Contact</button></p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} lg={6}>
                        <div class="card">
                            <div class="container">
                                <h2 className="names">Ken Ko</h2>
                                <p class="title">Software Developer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>ken@example.com</p>
                                <p><button class="button">Contact</button></p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} lg={6}>
                        <div class="card">
                            <div class="container">
                                <h2 className="names">WenBin Lin</h2>
                                <p class="title">Software Developer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>wenbin@example.com</p>
                                <p><button class="button">Contact</button></p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} lg={6}>
                        <div class="card">
                            <div class="container">
                                <h2 className="names">Shahjalal Sikder</h2>
                                <p class="title">Software Developer</p>
                                <p>Developed client side program using React and Bootstrap.</p>
                                <p>shah.sikder55@gmail.com</p>
                                <p><button class="button">Contact</button></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}