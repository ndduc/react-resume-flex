import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import icon_cdc from '../assets/images/Work/icon_cdc.jpg';
import icon_cdw from  '../assets/images/Work/icon_cdw.jpg';
import icon_gf from  '../assets/images/Work/icon_gf.jpg';
import icon_embry from  '../assets/images/Work/icon_embry.jpg';
import icon_softpoint from  '../assets/images/Work/icon_softpoint.jpg';
import icon_lee from  '../assets/images/Work/icon_leelee.jpg';
import ExperienceCustomCard from '../components/custom-card/custom-card-experience';
import icon_asu from  '../assets/images/Education/icon_asu.jpg';
import icon_mcc from  '../assets/images/Education/icon_mcc.jpg';
import icon_dob from  '../assets/images/Education/icon_dobson.jpg';
import icon_rhap from  '../assets/images/Cert/rhapsody.jpg';
import icon_scrum from  '../assets/images/Cert/scrum.jpg';
import EducationCustomCard from '../components/custom-card/custom-card-education';
import CertificationCustomCard from '../components/custom-card/custom-card-certificate';
import SkillCustomCard from '../components/custom-card/custom-card-skill';
function SkillPage() {
    let userExperiences = [
      {
        title: "Data Engineer",
        company: "CDC",
        startDate: "Nov 2022",
        endDate: "",
        currentlyWorking: true,
        jobDescription: "Collaborated on developing a data ingestion solution using Java and frameworks like Spring Boot, JPA. Integrated Kafka as messaging system and worked with Health Care data formats such as HL7 and Clinical Document XML. Deployed on AWS EKS for scalability and resilience, utilizing AWS services for staging and development. Achieved high code coverage through rigorous unit testing, contributing to the project's success and extension",
        skill: [
          "Helm Charts",
          "Hl7",
          "HL7 Standards",
          "Fhir",
          "Rhapsody",
          "Amazon EKS",
          "Amazon EC2",
          "docker",
          "Kubernetes",
          "Kafka",
          "Microservices",
          "Spring Boot",
          "REST APIs",
          "Software Development",
          "Databases",
          "SQL",
          "Java",
          "Amazon Relational Database Service (RDS)"
        ],
        companyLogo: icon_cdc
      },
      {
        title: "Software Data Engineer 3",
        company: "CDW-G",
        startDate: "Nov 2022",
        endDate: "",
        currentlyWorking: true,
        jobDescription: "",
        skill: [
          "Software Design",
          "Software Consulting",
          "Software Development"
        ],
        companyLogo: icon_cdw
      },
      {
        company: "GearFire",
        title: "Software Engineer",
        startDate: "Jul 2021",
        endDate: "Oct 2023",
        currentlyWorking: false,
        jobDescription: "Maintained and improved an Ecommerce platform within the firearm and ammunition industry, encompassing customer and internal web applications. Employed TypeScript and Angular to create robust front-end solutions, enhanced user experience with Angular Material and Bootstrap. Developed APIs and microservices to enable seamless data processing and met business needs, utilizing C# with .Net6 and AWS serverless solution.",
        skill: [
          'REST APIs',
          'Software Development',
          'AWS CloudFormation',
          'Kibana',
          'Databases',
          'AngularJS',
          'Amazon S3',
          'SQL',
          'C#',
          'Cascading Style Sheets (CSS)',
          'Amazon Web Services (AWS)',
          'API Gateways',
          'AWS Lambda',
          'Amazon Relational Database Service (RDS)',
          'Amazon Simple Notification Service (SNS)',
          'Amazon SQS',
          'Amazon CloudFront',
          'Amazon Route 53',
          'Bootstrap',
          'Angular',
          'Elasticsearch',
          'Amazon Dynamodb'
        ],
        companyLogo:  icon_gf
      },
      {
        company: "Embry Health",
        title: "Software Engineer",
        startDate: "Nov 2020",
        endDate: "Jul 2021",
        currentlyWorking: false,
        jobDescription: "Contributed to a vaccine administration app for healthcare workers during COVID-19. Utilized Dart, Flutter, and BLOC design pattern for cross-platform development. Collaborated on UI design using Figma. Integrated camera for barcode scanning, maintained APIs for seamless communication, and implemented data processing workflows for accuracy.",
        skill: [
          "Amazon EC2",
          "Spring Boot",
          "REST APIs",
          "Software Development",
          "Databases",
          "SQL",
          "Java",
          "Dart",
          "JavaScript",
          "Amazon Relational Database Service (RDS)",
          "Flutter"
        ],
        companyLogo: icon_embry
      },
      {
        company: "SoftPoint LLC",
        title: "Full Stack Developer",
        startDate: "Jun 2020",
        endDate: "Nov 2020",
        currentlyWorking: false,
        jobDescription: "Played a key role in maintaining and enhancing an established restaurant POS application and web app. Leveraged PHP for backend APIs, optimized data management with MySQL, and created responsive web interfaces. Developed an Android POS app in Java, ensuring efficient restaurant operations. Collaborated on integration and handled bug fixes, feature additions, and user-driven improvements.",
        skill: [
          "REST APIs",
          "Software Development",
          "Databases",
          "SQL",
          "Java",
          "JavaScript",
          "PHP",
          "MySQL"
        ],
        companyLogo: icon_softpoint
      },
      {
        company: "Lee Lee International Market",
        title: "Application Developer",
        startDate: "Jun 2018",
        endDate: "Jun 2020",
        currentlyWorking: false,
        jobDescription: "Built an Inventory management app and employee website from scratch with HTML, CSS, and JavaScript. Designed UIs using Java and Swing, ensuring consistency. Developed backend APIs in PHP for efficient data handling with the MsSQL database. Provided effective IT support for hardware and software issues. Showed strong problem-solving and independence, delivering user-friendly apps while juggling various responsibilities.",
        skill: [
          "REST APIs",
          "Software Development",
          "Databases",
          "SQL",
          "Java",
          "JavaScript",
          "PHP",
          "HTML"
        ],
        companyLogo: icon_lee
      }
    ]

    let userEducations = [
      {
        school: "Arizona State University",
        title: "Bachelor of Engineering - BE, Computer Software Engineering",
        startDate: "2018",
        endDate: "2021",
        isGraduated: true,
        schoolUrl: icon_asu
      },
      {
        school: "Mesa Community College",
        title: "Associate's degree, Computer Programming/Programmer, General",
        startDate: "2015",
        endDate: "2017",
        isGraduated: true,
        schoolUrl: icon_mcc
      },
      {
        school: "Dobson High School",
        title: "High School Diploma",
        startDate: "2011",
        endDate: "2014",
        isGraduated: true,
        schoolUrl: icon_dob
      }
    ]

    let userCertificate = [
      {
        title: "Rhapsody 7.0 Associate",
        provider: "Rhapsody",
        issue: "Mar 2023",
        credentialId: "69746051",
        certificateDirectUrl: "https://www.credential.net/d395a294-898d-4e95-af8a-5524dd1904e8",
        certificateUrl: icon_rhap
      },
      {
        title: "HL7: First Step",
        provider: "Rhapsody",
        issue: "Feb 2023",
        credentialId: "68062282",
        certificateDirectUrl: "https://www.credential.net/58a03308-0a5d-4bb1-8eb6-8223790da297",
        certificateUrl: icon_rhap
      },
      {
        title: "Scrum Foundations",
        provider: "Scrum Alliance",
        issue: "Jan 2023",
        credentialId: "1717023",
        certificateDirectUrl: "https://bcert.me/bc/html/show-badge.html?b=fmyueolv",
        certificateUrl: icon_scrum
      }
      
    ]

    const SkillType = {
      Stack: 0,
      Framework: 1,
      Database: 2,
      DevOps: 3,
      CloudTech: 4,
      GeneralSkill: 5
    }

    let   userSkill = [
      {
        category: "Stack",
        name: "Java",
        skillUrl: "/assets/images/skills/icon-java.png",
        level: "Professional",
        type: SkillType.Stack
      },
      {
        category: "Stack",
        name: "C#",
        skillUrl: "/assets/images/skills/icon-csharp.png",
        level: "Professional",
        type: SkillType.Stack
      },
      {
        category: "Stack",
        name: "Dart",
        skillUrl: "/assets/images/skills/icon-dart.png",
        level: "Proficient with less than 2 year of professional experiences",
        type: SkillType.Stack
      },
      {
        category: "Stack",
        name: "JavaScript",
        skillUrl: "/assets/images/skills/icon-js.png",
        level: "Professional",
        type: SkillType.Stack
      },
      {
        category: "Stack",
        name: "TypeScript",
        skillUrl: "/assets/images/skills/icon-ts.png",
        level: "Professional",
        type: SkillType.Stack
      },
      {
        category: "Stack",
        name: "SQL",
        skillUrl: "/assets/images/skills/icon-sql.png",
        level: "Professional",
        type: SkillType.Stack
      },
      {
        category: "Stack",
        name: "PHP",
        skillUrl: "/assets/images/skills/icon-php.png",
        level: "Proficient with less than 2 year of professional experiences",
        type: SkillType.Stack
      },
      {
        category: "Framework",
        name: "Spring, Spring Boot, Hibernate, JUnit, Gradle, Apache Kafka, Lombok",
        skillUrl: "/assets/images/skills/spring.png",
        level: "Professional",
        type: SkillType.Framework,
        baseLanguage: "Java"
      },
      {
        category: "Framework",
        name: ".Net, Entity, Moq, FluentValidation, AWS SDK",
        skillUrl: "/assets/images/skills/dotnet.png",
        level: "Professional",
        type: SkillType.Framework,
        baseLanguage: "C#"
      },
      {
        category: "Framework",
        name: "Angular, Bootstrap, NodeJs, HapiJs",
        skillUrl: "/assets/images/skills/angular.png",
        level: "Professional",
        type: SkillType.Framework,
        baseLanguage: "JavaScript, TypeScript"
      },
      {
        category: "Framework",
        name: "Flutter",
        skillUrl: "/assets/images/skills/flutter.png",
        level: "Professional",
        type: SkillType.Framework,
        baseLanguage: "Dart"
      },
      {
        category: "Database",
        name: "MySQL",
        skillUrl: "/assets/images/skills/icon-mysql.png",
        level: "Professional",
        type: SkillType.Database,
      },
      {
        category: "Database",
        name: "MsSQL",
        skillUrl: "/assets/images/skills/icon-mssql.png",
        level: "Professional",
        type: SkillType.Database,
      },
      {
        category: "Database",
        name: "Postgre",
        skillUrl: "/assets/images/skills/icon-postgre.png",
        level: "Professional",
        type: SkillType.Database,
      },
      {
        category: "Database",
        name: "DynamoDB",
        skillUrl: "/assets/images/skills/icon-dynamodb.jpg",
        level: "Professional",
        type: SkillType.Database,
      },
      {
        category: "Database",
        name: "Elastic Search",
        skillUrl: "/assets/images/skills/icon-es.png",
        level: "Professional",
        type: SkillType.Database,
      },
      {
        category: "DevOps",
        name: "GitHub",
        skillUrl: "/assets/images/skills/icon-git.png",
        level: "Professional",
        type: SkillType.DevOps,
      },
      {
        category: "DevOps",
        name: "BitBucket",
        skillUrl: "/assets/images/skills/icon-bit.png",
        level: "Professional",
        type: SkillType.DevOps,
      },
      {
        category: "DevOps",
        name: "Azure DevOps",
        skillUrl: "/assets/images/skills/icon-azure.jpg",
        level: "Professional",
        type: SkillType.DevOps,
      },
      {
        category: "General Technology",
        name: "Web Application",
        skillUrl: "/assets/images/skills/WebApp.png",
        level: "Professional",
        type: SkillType.GeneralSkill,
      },
      {
        category: "General Technology",
        name: "Mobile Application",
        skillUrl: "/assets/images/skills/MobileApp.png",
        level: "Professional",
        type: SkillType.GeneralSkill,
      },
      {
        category: "General Technology",
        name: "APIs",
        skillUrl: "/assets/images/skills/API.png",
        level: "Professional",
        type: SkillType.GeneralSkill,
      },
      {
        category: "General Technology",
        name: "Microservices",
        skillUrl: "/assets/images/skills/Micro.png",
        level: "Professional",
        type: SkillType.GeneralSkill,
      },
      {
        category: "General Technology",
        name: "Database (Design and Maintenance)",
        skillUrl: "/assets/images/skills/DataBase.png",
        level: "Professional",
        type: SkillType.GeneralSkill,
      },
      {
        category: "General Technology",
        name: "Cloud Tech",
        skillUrl: "/assets/images/skills/Cloud.png",
        level: "Professional",
        type: SkillType.GeneralSkill,
      },
      {
        category: "Cloud Services",
        name: "AWS SQS",
        skillUrl: "/assets/images/skills/icon-sqs.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Integration Service",
        description: "Messaging"
      },
      {
        category: "Cloud Services",
        name: "AWS SNS",
        skillUrl: "/assets/images/skills/icon-sns.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Integration Service",
        description: "Messaging"
      },
      {
        category: "Cloud Services",
        name: "AWS Step Functions",
        skillUrl: "/assets/images/skills/stepfunction.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Integration Service",
        description: "Workflows"
      },
      {
        category: "Cloud Services",
        name: "AWS API Gateway",
        skillUrl: "/assets/images/skills/icon-gateway.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Integration Service",
        description: "API Management"
      },
      {
        category: "Cloud Services",
        name: "AWS MSK (Managed Apache Kafka)",
        skillUrl: "/assets/images/skills/msk.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Analytics Service",
        description: "Data Management"
      },
      {
        category: "Cloud Services",
        name: "AWS S3",
        skillUrl: "/assets/images/skills/s3.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Analytics Service",
        description: "Data Management"
      },
      {
        category: "Cloud Services",
        name: "AWS SES (Simple Email Service)",
        skillUrl: "/assets/images/skills/simpleEmail.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Business Application",
        description: "Communication Developer Services"
      },
      {
        category: "Cloud Services",
        name: "AWS EC2",
        skillUrl: "/assets/images/skills/ec2.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Compute",
        description: "Instances"
      },
      {
        category: "Cloud Services",
        name: "AWS EKS",
        skillUrl: "/assets/images/skills/eks.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Compute",
        description: "Containers"
      },
      {
        category: "Cloud Services",
        name: "AWS Lambda",
        skillUrl: "/assets/images/skills/icon-lambda.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Compute",
        description: "Serverless"
      },
      {
        category: "Cloud Services",
        name: "AWS RDS",
        skillUrl: "/assets/images/skills/rds.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Database",
        description: ""
      },
      {
        category: "Cloud Services",
        name: "AWS Dynamo DB",
        skillUrl: "/assets/images/skills/dynamo.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Database",
        description: ""
      },
      {
        category: "Cloud Services",
        name: "AWS SDK for C#",
        skillUrl: "/assets/images/skills/dotnet.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Developer Tools",
        description: ""
      },
      {
        category: "Cloud Services",
        name: "AWS CloudFormation",
        skillUrl: "/assets/images/skills/icon-cloudformation.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Management & Governance",
        description: "Provision"
      },
      {
        category: "Cloud Services",
        name: "AWS CloudWatch",
        skillUrl: "/assets/images/skills/cloudWatch.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Management & Governance",
        description: "Operate"
      },
      {
        category: "Cloud Services",
        name: "AWS X-Ray",
        skillUrl: "/assets/images/skills/xray.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Management & Governance",
        description: "Operate"
      },
      {
        category: "Cloud Services",
        name: "AWS Systems Manager",
        skillUrl: "/assets/images/skills/systemManager.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Management & Governance",
        description: "Operate"
      },
      {
        category: "Cloud Services",
        name: "AWS CloudFront",
        skillUrl: "/assets/images/skills/icon-cloudfront.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Networking & Content Delivery",
        description: "Edge Networking"
      },
      {
        category: "Cloud Services",
        name: "AWS Route 53",
        skillUrl: "/assets/images/skills/icon-53.jpg",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Networking & Content Delivery",
        description: "Edge Networking"
      },
      {
        category: "Cloud Services",
        name: "AWS Certificate Manager",
        skillUrl: "/assets/images/skills/certManager.png",
        level: "Professional",
        type: SkillType.CloudTech,
        baseLanguage: "Security, Identify, & Compliance",
        description: ""
      },
    ];

    let generalSkill = userSkill.filter(skill => skill.type === SkillType.GeneralSkill);
    let stacks = userSkill.filter(skill => skill.type === SkillType.Stack);
    let frameworks = userSkill.filter(skill => skill.type === SkillType.Framework);
    let databases = userSkill.filter(skill => skill.type === SkillType.Database);
    let devops = userSkill.filter(skill => skill.type === SkillType.DevOps);
    let cloudTechs = userSkill.filter(skill => skill.type === SkillType.CloudTech);


    return (
      <Container>
        <Row className='text-center'>
            <p>
              Experiences & Educations
            </p>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="col-sm-12 col-md-6 col-lg-6">
            <Row>
              <Col className="col-12">
                Experiences
              </Col>
              <Col className="col-12">
                <div>
                  {
                    userExperiences.map(
                      (elem, index) => (
                        <ExperienceCustomCard key={index} item={elem}></ExperienceCustomCard>
                      )
                    )
                  }
                </div>
              </Col>
            </Row>
          </Col>

          <Col className='col-sm-12 col-md-6 col-lg-6'>
            <Row>
                <Col className='col-12'>
                  Educations
                </Col>
                <Col className='col-12'>
                  <div>
                    {
                      userEducations.map(
                        (elem, index) => (
                          <EducationCustomCard key={index} item={elem}></EducationCustomCard>
                        )
                      )
                    }
                  </div>
                </Col>
            </Row>

            <Row>
                <Col className='col-12'>
                Licenses & Certificates
                </Col>
                <Col className='col-12'>
                  <div>
                    {
                      userCertificate.map(
                        (elem, index) => (
                          <CertificationCustomCard key={index} item={elem}></CertificationCustomCard>
                        )
                      )
                    }
                  </div>
                </Col>
            </Row>
          </Col>
        </Row>
        <Row className='text-center'>
          <p>
            Skills
          </p>
        </Row>
        <hr className="my-4" />
        <Row>
            <Col className='col-12'>
              General Skills
            </Col>
            <Col className='col-12'>
              <Row>
                  {
                    generalSkill.map(
                      (elem, index) => (
                        <Col className='col-auto'><SkillCustomCard key={index} item={elem}></SkillCustomCard></Col>
                      )
                    )
                  }
              </Row>        
            </Col>
        </Row>

        <Row>
            <Col className='col-12'>
              Stacks
            </Col>
            <Col className='col-12'>
              <Row>
                  {
                    stacks.map(
                      (elem, index) => (
                        <Col className='col-auto'><SkillCustomCard key={index} item={elem}></SkillCustomCard></Col>
                      )
                    )
                  }
              </Row>        
            </Col>
        </Row>

        <Row>
            <Col className='col-12'>
              Frameworks
            </Col>
            <Col className='col-12'>
              <Row>
                  {
                    frameworks.map(
                      (elem, index) => (
                        <Col className='col-auto'><SkillCustomCard key={index} item={elem}></SkillCustomCard></Col>
                      )
                    )
                  }
              </Row>        
            </Col>
        </Row>

        <Row>
            <Col className='col-12'>
              Databases
            </Col>
            <Col className='col-12'>
              <Row>
                  {
                    databases.map(
                      (elem, index) => (
                        <Col className='col-auto'><SkillCustomCard key={index} item={elem}></SkillCustomCard></Col>
                      )
                    )
                  }
              </Row>        
            </Col>
        </Row>

        <Row>
            <Col className='col-12'>
              DevOps
            </Col>
            <Col className='col-12'>
              <Row>
                  {
                    devops.map(
                      (elem, index) => (
                        <Col className='col-auto'><SkillCustomCard key={index} item={elem}></SkillCustomCard></Col>
                      )
                    )
                  }
              </Row>        
            </Col>
        </Row>

        <Row>
            <Col className='col-12'>
            Cloud Technologies
            </Col>
            <Col className='col-12'>
              <Row>
                  {
                    cloudTechs.map(
                      (elem, index) => (
                        <Col className='col-auto'><SkillCustomCard key={index} item={elem}></SkillCustomCard> </Col>
                      )
                    )
                  }
              </Row>        
            </Col>
        </Row>
      </Container>
    );
  }

export default SkillPage;
