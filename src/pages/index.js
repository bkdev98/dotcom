import React from "react"
import { Mail, Phone, MapPin, MousePointer, Linkedin, GitHub } from "react-feather"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkExperience from "../components/work-experience"
import Skill from "../components/skill"
import Project from "../components/project"
import Reference from "../components/reference"
import Row from "../components/row"
import Col from "../components/col"
import useWindowSize from "../hooks/useWindowSize"

import data from "../data.json"

export const iconProps = {
  color: '#333',
  size: 15,
  style: {
    marginLeft: 10,
    verticalAlign: 'middle',
  }
}

const IndexPage = () => {
  const { width } = useWindowSize();

  return (
    <Layout>
      <SEO title="Resume" />
      <Row>
        <Col lg='66.7%' sm='100%' style={{ textAlign: width >= 809 ? 'left' : 'center' }}>
          <h1>BUI QUOC KHANH</h1>
          <h4>Senior Software Engineer</h4>
          <p>
            Experienced full-stack developer with 2.5+ years in developing and managing modern web and mobile apps
            with a demonstrated history of working in the tech start-up space. Skilled in ReactJS, React Native, NodeJS and Electron.
          </p>
        </Col>
        <Col lg='33.3%' sm='100%'>
          <div style={{
            textAlign: width >= 809 ? 'right' : 'center',
            lineHeight: '30px',
            marginTop: width >= 809 ? 0 : 20,
          }}>
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
        <Col lg='45%' sm='100%'>
          <h3>WORK EXPERIENCE</h3>
          {data.workExperiences.map(item => (
            <WorkExperience
              key={item.title}
              {...item}
            />
          ))}
          {width >= 809 && <>
            <h3>REFERENCES</h3>
            {data.references.map(item => (
              <Reference
                key={item.name}
                {...item}
              />
            ))}
          </>}
        </Col>
        <Col lg='45%' sm='100%'>
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
          {width < 809 && <>
            <h3>REFERENCES</h3>
            {data.references.map(item => (
              <Reference
                key={item.name}
                {...item}
              />
            ))}
          </>}
        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage
