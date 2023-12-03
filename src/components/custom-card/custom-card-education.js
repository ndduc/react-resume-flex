import React from 'react';
import { Card } from 'react-bootstrap';
import '../custom-card/styles/custom-card-style.css'
const EducationCustomCard = ({ item }) => {
  return (
    <Card className="my-2">
      <Card.Header>
        <img
          src={item.schoolUrl}
          alt="firstFindMeLink"
          className="rounded-circle"
          width="100"
        />
        <Card.Title className='title-text'>{item.school} - {item.title}</Card.Title>
        <Card.Subtitle className='title-text'>
          {item.isGraduated ? `${item.startDate} - ${item.endDate}` : `${item.startDate} - Current`}
        </Card.Subtitle>
      </Card.Header>
    </Card>
  );
};

export default EducationCustomCard;