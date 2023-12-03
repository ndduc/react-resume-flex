import React from 'react';
import { Card } from 'react-bootstrap';
import '../custom-card/styles/custom-card-style.css'
const SkillCustomCard = ({ item }) => {
  return (
    <Card className="my-2">
      <Card.Header>
        <img
          src={item.skillUrl}
          alt="firstFindMeLink"
          className="rounded-circle"
          width="40"
        />
        <Card.Title className='title-text-skill'>{item.name}</Card.Title>
        <Card.Subtitle className='title-text-skill'>Experience Level: {item.level}</Card.Subtitle>
      </Card.Header>
    </Card>
  );
};

export default SkillCustomCard;
