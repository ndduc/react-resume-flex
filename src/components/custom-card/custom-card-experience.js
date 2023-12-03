import React, { useState } from 'react';
import { Card, Accordion, useAccordionButton } from 'react-bootstrap';
import '../custom-card/styles/custom-card-style.css'


const ExperienceCustomCard = ({ item }) => {
    const [open, setOpen] = useState(false);
  
    const CustomToggle = ({ children, eventKey }) => {
      const decoratedOnClick = useAccordionButton(eventKey, () =>
        setOpen(!open),
      );
  
      return (
        <button
          type="button"
          style={{ backgroundColor: 'transparent', border: 'none' }}
          onClick={decoratedOnClick}
        >
          {children}
        </button>
      );
    };
  
    return (
      <Card className="my-2">
        <Card.Header>
          <img
            src={item.companyLogo}
            alt="firstFindMeLink"
            className="rounded-circle"
            width="100"
          />
          <Card.Title className='title-text'>{item.company} - {item.title}</Card.Title>
          <Card.Subtitle className='title-text'>
            {item.currentlyWorking ? `${item.startDate} - Current` : `${item.startDate} - ${item.endDate}`}
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <div className="job-description-text">
            {item.jobDescription}
          </div>
  
          <Accordion className="my-2">
            <Card>
              <Card.Header>
                <CustomToggle eventKey="0">Skills & Stacks</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {item.skill.join(', ')}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card.Body>
      </Card>
    );
  };
  
  export default ExperienceCustomCard;