export default function AboutUs() {
    return (
        <>
            <div class="about-section">
                <h1>About Us Page</h1>
                <p>Finding Books Easy</p>
                <p>We are determined to make it easier for college students to find books and remedy the issue of high college costs.
                    Through lending and donating, books will be made accessible and affordable.
                </p>
            </div>

            <h2 className="team-h2">Our Team</h2>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src="/w3images/team1.jpg" alt="Oumar" className='team-img' />
                        <div class="container">
                            <h2>Oumar Siby</h2>
                            <p class="title">Software Developer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>oumar@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="/w3images/team2.jpg" alt="Ken" className='team-img' />
                        <div class="container">
                            <h2>Ken Ko</h2>
                            <p class="title">Software Developer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>ken@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="/w3images/team3.jpg" alt="WenBin" className='team-img' />
                        <div class="container">
                            <h2>WenBin Lin</h2>
                            <p class="title">Software Developer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>wenbin@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="/w3images/team3.jpg" alt="Shah" className='team-img' />
                        <div class="container">
                            <h2>Shahjalal Sikder</h2>
                            <p class="title">Software Developer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>shahjalal@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}