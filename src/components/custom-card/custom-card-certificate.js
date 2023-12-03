import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../custom-card/styles/custom-card-style.css'
const CertificationCustomCard = ({ item }) => {

const handleShowCredential = (url) => {
    // Logic to handle the button click, e.g., redirect to the credential URL
    window.open(url, '_blank');
    };

  return (
    <Card className="my-2">
      <Card.Header>
        <img
          src={item.certificateUrl}
          alt="firstFindMeLink"
          className="rounded-circle"
          width="100"
        />
        <Card.Title className='title-text'>{item.title}</Card.Title>
        <Card.Subtitle className='title-text'>{item.provider} - Issued: {item.issue}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <div className="job-description-text">
          Certificate ID: {item.credentialId}
        </div>
        <Button 
          className="mt-1" 
          variant="primary" 
          onClick={() => handleShowCredential(item.certificateDirectUrl)}
        >
          Show Credential
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CertificationCustomCard;
