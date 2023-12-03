import React from 'react';
import { Modal, Button, Row, Col, Carousel } from 'react-bootstrap';
import '../dialog/styles/project-dialog-style.css'


const ProjectDialog = ({project, show, handleClose}) => {

    let projectStack;
    let projectFramework;
    let projectCloud;
    let projectOtherTech;
    let projectDatabase;
    let projectSource;
    if (project && project.stack.length > 0) {
        projectStack =  <Row>
                            <Col class="col-sm-4 col-lg-3 content-sub-title" >
                                Stack: 
                            </Col>
                            <Col class="col-sm-8 col-lg-9">
                                {project.stack.join(', ')}
                            </Col>
                        </Row>;
    }

    if (project && project.framework.length > 0) {
        projectFramework =  <Row>
                            <Col class="col-sm-4 col-lg-3 content-sub-title" >
                                Frameworks: 
                            </Col>
                            <Col class="col-sm-8 col-lg-9">
                                {project.framework.join(', ')}
                            </Col>
                        </Row>;
    }

    if (project && project.cloudTech.length > 0) {
        projectCloud =  <Row>
                            <Col class="col-sm-4 col-lg-3 content-sub-title" >
                                Cloud Tech: 
                            </Col>
                            <Col class="col-sm-8 col-lg-9">
                                {project.cloudTech.join(', ')}
                            </Col>
                        </Row>;
    }

    if (project && project.otherTech.length > 0) {
        projectOtherTech =  <Row>
                            <Col class="col-sm-4 col-lg-3 content-sub-title" >
                                App Category: 
                            </Col>
                            <Col class="col-sm-8 col-lg-9">
                                {project.otherTech.join(', ')}
                            </Col>
                        </Row>;
    }

    if (project && project.database.length > 0) {
        projectDatabase =  <Row>
                            <Col class="col-sm-4 col-lg-3 content-sub-title" >
                                Database: 
                            </Col>
                            <Col class="col-sm-8 col-lg-9">
                                {project.database.join(', ')}
                            </Col>
                        </Row>;
    }

    if (project && project.sourceCodeUrl.length > 0) {
        projectSource =  <Row>
                            <Col class="col-sm-4 col-lg-3 content-sub-title" >
                                Source Code: 
                            </Col>
                            <Col class="col-sm-8 col-lg-9">
                                
                                <a href={project.sourceCodeUrl.join(', ')} target="_blank" rel="noopener noreferrer">Link</a>
                            </Col>
                        </Row>;
    }
    

    return (
            <Modal show={show} onHide={handleClose} className="modal-lg dialog-container" >

                <Row className='mx-1 my-1'>
                    <Col className='col-12 pt-2'>
                        <Row>
                            <Col className='col-12 title-main'>
                                <b>
                                    {project.name}
                                </b>
                            </Col>
                            <Col className='col-12 title-sub'>
                                <b>
                                    {project.company}
                                </b>
                            </Col>
                        </Row>
                    </Col>

                    <Carousel className="col-12 my-2">
                        {project.projectUrl.map((slide, index) => (
                            <Carousel.Item key={index}>
                            <img className="d-block w-100 fixed-size-image" src={slide} alt="Slide" />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                
                    <Col className='col-12 text-content'>
                        <Row>
                            <Col className='col-12 py-1 content-main'>
                                {project.description}
                            </Col>
                            <Col className='col-12 py-1 content-sub'>
                                {projectStack}
                                {projectFramework}
                                {projectCloud}
                                {projectOtherTech}
                                {projectDatabase}
                                {projectSource}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
     
    );
}

export default ProjectDialog;
