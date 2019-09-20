import React from "react"
import { Row, Col } from "react-flexbox-grid"
import { Mail, Phone, MapPin, MousePointer, Linkedin, GitHub } from "react-feather"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkExperience from "../components/work-experience"
import Skill from "../components/skill"
import Project from "../components/project"
import Reference from "../components/reference"

import data from "../data.json"

export const iconProps = {
  color: '#333',
  size: 15,
  style: {
    marginLeft: 10,
    verticalAlign: 'middle',
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Resume" />
    <Row>
      <Col xl={6} md={8} sm={12}>
        <h1>Bui Quoc Khanh</h1>
        <h4>Senior Software Engineer</h4>
        <p>
          Experienced full-stack developer with 2.5+ years in developing and managing modern web and mobile apps
          with a demonstrated history of working in the tech start-up space. Skilled in ReactJS, React Native, NodeJS and Electron.
        </p>
      </Col>
      <Col xl={6} md={4} sm={12}>
        <div style={{ textAlign: 'right', lineHeight: '30px' }}>
          <p><a href="mailto:bkdev98@gmail.com">bkdev98@gmail.com</a><Mail {...iconProps} /></p>
          <p><a href="tel:+84949840370">+84-949840370</a><Phone {...iconProps} /></p>
          <p>Ho Chi Minh City, Vietnam<MapPin {...iconProps} /></p>
          <p><a href="https://buiquockhanh.com">buiquockhanh.com</a><MousePointer {...iconProps} /></p>
          <p><a href="https://linkedin.com/in/bkdev98">linkedin.com/in/bkdev98</a><Linkedin {...iconProps} /></p>
          <p><a href="https://github.com/bkdev98">github.com/bkdev98</a><GitHub {...iconProps} /></p>
        </div>
      </Col>
    </Row>
    <hr />
    <Row>
      <Col xl={5} sm={12}>
        <h3>WORK EXPERIENCE</h3>
        {data.workExperiences.map(item => (
          <WorkExperience
            key={item.title}
            {...item}
          />
        ))}
        <h3>REFERENCES</h3>
        {data.references.map(item => (
          <Reference
            key={item.name}
            {...item}
          />
        ))}
      </Col>
      <Col xl={6} xlOffset={1} sm={12}>
        <h3>SKILLS</h3>
        <div style={{ marginBottom: 20 }}>
          {data.skills.map(item => <Skill key={item}>{item}</Skill>)}
        </div>
        <h3>PROJECTS</h3>
        <div>
          {data.projects.map(item => (
            <Project
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
