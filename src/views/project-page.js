import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCustomCard from '../components/custom-card/custom-card-project';
import ProjectDialog from '../components/dialog/project-dialog';

function ProjectPage() {

  let userWork = [
    {
      name: "Anime Finder",
      company: "Side Project",
      stack: ["TypeScript", "C#"],
      framework: ["Angular", "DotNet6"],
      cloudTech: ["AWS Serverless", "AWS Api Gateway", "AWS Lambda", "AWS CloudFormation", "AWS CloudWatch"],
      otherTech: ["Responsive Web App", "APIs"],
      database: ["DynamoDB"],
      description: "Anime Finder is the result of my deep appreciation for anime. I set out to create a straightforward solution for fans across the globe to locate and enjoy any anime content available on the internet. As a non-profit initiative, I've made sure the site is accessible for all, allowing users to freely search and indulge in their favorite anime.",
      companyOwnedApplied: false,
      projectUrl: ["/assets/images/Anifinder/1.png", "/assets/images/Anifinder/2.png", "/assets/images/Anifinder/3.png",  "/assets/images/Anifinder/4.png",  "/assets/images/Anifinder/5.png"],
      projectRedirectUrl: "https://www.google.com/",
      sourceCodeUrl: ["https://www.google.com/"],
      isOpenedSource: true
    },
    {
      name: "Asset Road Runner",
      company: "Embry Health",
      stack: ["Dart", "JavaScript", "Java"],
      framework: ["Flutter", "NodeJs", "Spring"],
      cloudTech: ["AWS Rds", "AWS AppSync"],
      otherTech: ["Cross-Platform Mobile App", "APIs", "Microservices"],
      database: ["AWS Aurora"],
      description: "Asset Road Runner is an innovative, cross-platform asset management application meticulously crafted by my dedicated team at Embry Health to meet precise business needs. At its core, the application empowers corporations to track their assets with precision and ease, functioning akin to an in-house version of Asset Panda, a leader in the asset management market. Our tailored solution offers a seamless and intuitive interface designed to integrate effortlessly into our corporate workflow, ensuring real-time asset tracking and management is always at our fingertips.",
      companyOwnedApplied: true,
      projectUrl: ["/assets/images/AssetManagement/1.png", "/assets/images/AssetManagement/2.png", "/assets/images/AssetManagement/3.png","/assets/images/AssetManagement/4.png"],
      projectRedirectUrl: "https://www.google.com/",
      sourceCodeUrl: ["https://www.google.com/"],
      isOpenedSource: false
    },
    {
      name: "Calories Tracker",
      company: "Side Project",
      stack: ["Dart", "C#"],
      framework: ["Flutter", "DotNet6"],
      cloudTech: ["AWS Serverless", "AWS Api Gateway", "AWS Lambda", "AWS CloudFormation", "AWS CloudWatch"],
      otherTech: ["Cross-Platform Mobile App", "APIs"],
      database: ["DynamoDB"],
      description: "I've developed a bespoke application tailored to help individuals monitor their daily caloric intake with precision and ease. Designed with user-friendliness in mind, the app not only tracks daily calories but also enables users to search for nutritional information by food type. This personalized tool is geared towards those who are conscious about their eating habits and seek to maintain a balanced diet.",
      companyOwnedApplied: false,
      projectUrl: ["/assets/images/CalTracker/1.png", "/assets/images/CalTracker/2.png", "/assets/images/CalTracker/3.png", "/assets/images/CalTracker/4.png", "/assets/images/CalTracker/5.png", "/assets/images/CalTracker/6.png"],
      projectRedirectUrl: "https://www.google.com/",
      sourceCodeUrl: ["https://www.google.com/"],
      isOpenedSource: true
    },
    {
      name: "Embry Eye",
      company: "Embry Health",
      stack: ["Dart", "JavaScript", "Java"],
      framework: ["Flutter", "NodeJs", "Spring"],
      cloudTech: ["AWS Rds", "AWS AppSync"],
      otherTech: ["Cross-Platform Mobile App", "APIs", "Microservices"],
      database: ["AWS Aurora"],
      description: "The latest addition to Embry Health's suite of applications is a cutting-edge extension designed to integrate seamlessly with Asset Road Runner. This new app provides corporate teams the ability to track their assets in real-time with impeccable accuracy. It records the location of each asset at intervals set by the user, whether every few minutes or hours, and securely uploads this data to a cloud-based database. This ensures that asset monitoring is not only continuous but also that the information is readily accessible and up-to-date, empowering businesses with the data they need to make informed decisions.",
      companyOwnedApplied: true,
      projectUrl: ["/assets/images/EmbryEye/1.png", "/assets/images/EmbryEye/2.png"],
      projectRedirectUrl: "https://www.google.com/",
      sourceCodeUrl: ["https://www.google.com/"],
      isOpenedSource: false
    },
    {
      name: "VaxTrack",
      company: "Embry Health",
      stack: ["Dart", "JavaScript", "Java"],
      framework: ["Flutter", "NodeJs", "Spring"],
      cloudTech: ["AWS Rds", "AWS AppSync"],
      otherTech: ["Cross-Platform Mobile App", "APIs", "Microservices"],
      database: ["AWS Aurora"],
      description: "Among the diverse projects at Embry Health, my team and I have designed and developed a specialized application that significantly streamlines the process of vaccine management. This app's primary functionality enables users to input vaccine data either manually or by scanning barcodes, facilitating effortless tracking of vaccines from storage all the way through to administration. This tool ensures meticulous oversight of vaccine inventory, enhancing efficiency and accuracy in vaccine delivery and management.",
      companyOwnedApplied: true,
      projectUrl: ["/assets/images/Vaxtrack/1.png", "/assets/images/Vaxtrack/2.png", "/assets/images/Vaxtrack/3.png", "/assets/images/Vaxtrack/4.png", "/assets/images/Vaxtrack/5.png"],
      projectRedirectUrl: "https://www.google.com/",
      sourceCodeUrl: ["https://www.google.com/"],
      isOpenedSource: false
    },
    {
      name: "GearFire Ecom Saas Solution",
      company: "GearFire",
      stack: ["Typescript", "C#"],
      framework: ["Angular", "DotNet6"],
      cloudTech: ["AWS Serverless with Lambda and API Gateway", 
        "Highly Flexibale Miscroservice with SQS and SNS",
        "Data Stream and Caching with DynamnoDB"],
      otherTech: ["Responsive Web App", "APIs", "Microservices"],
      database: ["DynamoDB", "PostgresDB", "Elastic Search"],
      description: "Gearfire Ecom is a dynamic eCommerce platform our team designed to cater to the diverse needs of customers looking to bring their inventory to the digital marketplace. It provides a versatile and user-friendly interface, allowing users to fully customize their online storefronts, manage inventories, and adjust pricing according to their business strategies. This platform is the foundation for users to effortlessly commercialize and showcase their products to a wider online audience.",
      companyOwnedApplied: true,
      projectUrl: ["/assets/images/GFEcom/1.png", "/assets/images/GFEcom/2.png", "/assets/images/GFEcom/3.png", "/assets/images/GFEcom/4.png"],
      projectRedirectUrl: "https://www.google.com/",
      sourceCodeUrl: ["https://www.google.com/"],
      isOpenedSource: false
    },
    {
      name: "GearFire Internal Saas Solution",
      company: "GearFire",
      stack: ["Typescript", "C#"],
      framework: ["Angular", "DotNet6"],
      cloudTech: ["AWS Serverless with Lambda and API Gateway", 
        "Highly Flexibale Miscroservice with SQS and SNS",
        "Data Stream and Caching with DynamnoDB"],
      otherTech: ["Responsive Web App", "APIs", "Microservices"],
      database: ["DynamoDB", "PostgresDB", "Elastic Search"],
      description: "GearFire Product Management serves as the robust backend infrastructure for GearFire Ecom, acting as the central hub where both customers and GearFire's employees access to perform their customizations. It is the pivotal point where intricate product details, pricing strategies, and inventory adjustments are made, enabling a seamless and efficient management process for the eCommerce storefronts.",
      companyOwnedApplied: true,
      projectUrl: ["/assets/images/GFMan/1.png", "/assets/images/GFMan/2.png", "/assets/images/GFMan/3.png"],
      projectRedirectUrl: "https://www.google.com/",
      sourceCodeUrl: ["https://www.google.com/"],
      isOpenedSource: false
    },
    {
      name: "Backend Product Management",
      company: "Lee Lee",
      stack: ["Java"],
      framework: ["Swing"],
      cloudTech: [],
      otherTech: ["Desktop Application"],
      database: ["MsSQL"],
      description: "My inaugural venture into real-life applications is a bespoke solution created for Lee Lee International Market's backend operations, crafted diligently using Java Core and Swing. Designed with a strong focus on efficiency, the application was built from the ground up with numerous customizations to streamline and enhance the data entry process, tailored specifically to the unique requirements of the marketplace's dynamic environment.",
      companyOwnedApplied: true,
      projectUrl: ["/assets/images/LeeLeeJava/1.png", "/assets/images/LeeLeeJava/2.png", "/assets/images/LeeLeeJava/3.png", "/assets/images/LeeLeeJava/4.png", "/assets/images/LeeLeeJava/5.png"],
      projectRedirectUrl: "https://www.google.com/",
      sourceCodeUrl: ["https://www.google.com/"],
      isOpenedSource: false
    },
    {
      name: "Product Finder",
      company: "Lee Lee",
      stack: ["PHP", "JavaScript"],
      framework: ["NodeJs", "ExpressJs"],
      cloudTech: [],
      otherTech: ["Internal Web Application"],
      database: ["MsSQL"],
      description: "Developed with the specific needs of Lee Lee Market in mind, this custom application empowers internal employees to swiftly locate and verify the price of any product within the facility. It’s designed to provide a user-friendly interface that simplifies in-house operations, making product management more efficient for the staff.",
      companyOwnedApplied: true,
      projectUrl: ["/assets/images/LeeLeePhp/1.png", "/assets/images/LeeLeePhp/2.png", "/assets/images/LeeLeePhp/3.png"],
      projectRedirectUrl: "https://www.google.com/",
      sourceCodeUrl: ["https://www.google.com/"],
      isOpenedSource: false
    },
  ]

  const [showDialog, setShowDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleOpenDialog = (item) => {
    setShowDialog(true);
    setSelectedItem(item);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setSelectedItem(null);
  };

    return (
      <Container fluid>
        <Row className='py-1'>
          {
            userWork.map(
              (elem) => (
                <Col className='col-lg-3 col-md-6 mb-4'>
                  <ProjectCustomCard item={elem} onOpenDialog={() => handleOpenDialog(elem)} />
              
                </Col>
              )
            )
          }
        </Row>
        {selectedItem && (
          <ProjectDialog 
            show={showDialog} 
            handleClose={handleCloseDialog} 
            project={selectedItem}
          >
            {
            }
          </ProjectDialog>
        )}
      </Container>
    );
  }

export default ProjectPage;
