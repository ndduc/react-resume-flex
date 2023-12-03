import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../custom-card/styles/custom-card-project-style.css'

const ProjectCustomCard = ({ item, onOpenDialog }) => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle>{item.company}</Card.Subtitle>
      </Card.Header>
      
      <Card.Img variant="top" src={item.projectUrl[0]} alt="Project" className="p-1 project-image" />
      
      <Card.Body>
        {/* Additional content can go here */}
      </Card.Body>
      
      <Card.Footer>
        <Button onClick={onOpenDialog}>FIND OUT MORE</Button>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCustomCard;
