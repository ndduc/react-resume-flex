import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './styles/home-page.css';
import { useNavigate } from 'react-router-dom';

import image_me1 from '../assets/images/me/me_2_editted.jpg';
import image_git from '../assets/images/github.png';
import image_linkedin from '../assets/images/linkedin.png';
import image_phone from '../assets/images/phone.png';
import image_email from '../assets/images/email.png';

let userIntro = {
    firstIntro: 'Hello visitors, my name is Duc Nguyen',
    secondIntro: 'I am full stack software engineerwith over 4 years of experience in designing, developing, and maintaining robust software solutions. Proficient in a variety of programming languages, including Java, C#, Dart/Flutter, and Typescript/Angular. Expertise in front-end and back-end development, with a strong understanding of web, mobile, and desktop application development. Proven ability to architect and implement efficient databases, SQL and NoSQL, with table creation and design expertise. Experience with cloud services, particularly AWS, including integration with various AWS tools and services. Strong problem-solving and analytical skills, with a keen attention to detail and a passion for delivering high-quality code.',
    thridIntro: 'If you are a company looking to integrate technology into your operations, or an employer in search of the right talent, I am open to discussing any opportunities.',
    phoneNumber: '623-570-4113',
    email: 'ndduc1856@mail.com',
    githubUrl: 'https://github.com/ndduc',
    linkedInUrl: 'https://www.linkedin.com/in/duc-n-1a5155a2',
    avatarUrl: image_me1
}

function HomePage() {
    let navigate = useNavigate();

    const handleDirectToSkill = (path) => {
        navigate(path); 
    };

      
    return (
        
        <Container>

            <Row className='text-center'>
                <div className='pt-1'>
                    <h1>{userIntro.firstIntro}</h1>
                    <p>{userIntro.secondIntro}</p>
                    <p>
                    {userIntro.thridIntro}
                    </p>
                </div>

                <div className='d-flex justify-content-center mt-1'>
                    <Image src={userIntro.avatarUrl} alt="error" roundedCircle  width={400}/>
                </div>

                <Container className="container text-center mt-2">
                    <p>
                        <b>Find Me At</b>
                    </p>
                </Container>

                <Container className='text-center'>
                    <a className="mx-2" href={userIntro.githubUrl}   target="_blank">
                        <Image src={image_git} alt="firstFindMeLink" roundedCircle width="40"/>
                    </a>
                    <a className="mx-2" href={userIntro.linkedInUrl}  target="_blank">
                        <Image src={image_linkedin} alt="secondFindMeLink" roundedCircle width="40"/>
                    </a>
                </Container>

                
                <Container className="text-center mt-2">
                    <p>
                        <b>Let Get In Touch</b>
                    </p>
                </Container>

                <Container className="d-flex justify-content-center align-items-center">
                    <Row className="row">
                        <Col className="col-auto"><Image src={image_email} alt="getIntouchLink" width="40"/></Col>
                        <Col className="col-auto"><p>{userIntro.email}</p></Col>
                    </Row>
                </Container>
                <Container className="d-flex justify-content-center align-items-center">
                    <Row className="row">
                        <Col className="col-auto"><Image src={image_phone} alt="getIntouchLink" width="40"/></Col>
                        <Col className="col-auto"><p>{userIntro.phoneNumber}</p></Col>
                    </Row>
                </Container>

            </Row>

            <hr className="my-2" />

            <Container className="d-flex justify-content-center align-items-center pb-5">
                <Row>
                    <Col className="col-auto" onClick={() => handleDirectToSkill('/skill')}>
                        <h4 className="item-hover">Skills</h4>
                    </Col>
                    <Col className="col-auto" onClick={() => handleDirectToSkill('/project')}>
                        <h4 className="item-hover">Projects</h4>
                    </Col>
                </Row>
            </Container>


        </Container>
        
    )
}

export default HomePage;