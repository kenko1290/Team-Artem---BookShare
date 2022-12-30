import BookNavbar from "../../components/Navbar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AboutUs() {
	return (
		<>
			<BookNavbar />
			<div class="about-section">
				<h1>About Us Page</h1>
				<p>Finding Books Easy</p>
				<p>
					We are determined to make it easier for college students to find books
					and remedy the issue of high college costs. Through lending and
					donating, books will be made accessible and affordable.
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
								<p>
									Responsible for the connection and fluency between the client
									and back end of the application
								</p>
								<p>omarcb1020@gmail.com</p>
								<p>
									<a
										href="https://www.linkedin.com/in/oumarsiby/"
										target="_blank"
										rel="noreferrer"
									>
										<button class="button">Contact</button>
									</a>
								</p>{" "}
							</div>
						</div>
					</Col>

					<Col xs={12} lg={6}>
						<div class="card">
							<div class="container">
								<h2 className="names">Ken Ko</h2>
								<p class="title">Software Developer</p>
								<p>Programmed front-end functionality using React</p>
								<p>ken.ko1290@gmail.com</p>
								<p>
									<a
										href="https://www.linkedin.com/in/koken/"
										target="_blank"
										rel="noreferrer"
									>
										<button class="button">Contact</button>
									</a>
								</p>
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
								<p>
									Developed back-end portion of application using Node, Express,
									Sequelize, and PostgreSQL. Connected front-end to the
									back-end.
								</p>
								<p>wblin2986@gmail.com</p>
								<p>
									<a
										href="https://www.linkedin.com/in/wblin/"
										target="_blank"
										rel="noreferrer"
									>
										<button class="button">Contact</button>
									</a>
								</p>
							</div>
						</div>
					</Col>

					<Col xs={12} lg={6}>
						<div class="card">
							<div class="container">
								<h2 className="names">Shahjalal Sikder</h2>
								<p class="title">Software Developer</p>
								<p>
									Worked on client side of application using React and Bootstrap
								</p>
								<p>shah.sikder55@gmail.com</p>
								<p>
									<a
										href="https://www.linkedin.com/in/shahjalal-sikder-465636176/"
										target="_blank"
										rel="noreferrer"
									>
										<button class="button">Contact</button>
									</a>
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}
