import React from "react"
import { Mail, Phone, MapPin, MousePointer, Linkedin, GitHub } from "react-feather"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { remarkForm } from 'gatsby-tinacms-remark'

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkExperience from "../components/work-experience"
import Skill from "../components/skill"
import Project from "../components/project"
import Reference from "../components/reference"
import Row from "../components/row"
import Col from "../components/col"

export const iconProps = {
  color: '#333',
  size: 15,
  style: {
    marginLeft: 10,
    verticalAlign: 'middle',
  }
}

const MetaCol = styled(Col)`
  text-align: left;
  @media (max-width: 808px) {
    text-align: center;
  }
`

const ContactWrapper = styled.div`
  line-height: 30px;
  text-align: right;
  margin-top: 0px;
  @media (max-width: 808px) {
    text-align: center;
    margin-top: 20px;
  }
`

const ReferenceDesktop = styled.div`
  display: block;
  @media (max-width: 808px) {
    display: none;
  }
`

const ReferenceMobile = styled.div`
  display: none;
  @media (max-width: 808px) {
    display: block;
  }
`

const IndexPage = (props) => {
  const { meta } = props.data;

  return (
    <Layout>
      <SEO title="Portfolio" />
      <Row>
        <MetaCol lg='66.7%' sm='100%'>
          <h1>{meta.frontmatter.name}</h1>
          <h4>{meta.frontmatter.title}</h4>
          <div dangerouslySetInnerHTML={{ __html: meta.html }} />
        </MetaCol>
        <Col lg='33.3%' sm='100%'>
          <ContactWrapper>
            <p><a href={`mailto:${meta.frontmatter.email}`}>{meta.frontmatter.email}</a><Mail {...iconProps} /></p>
            <p><a href={`tel:${meta.frontmatter.phone}`}>{meta.frontmatter.phone}</a><Phone {...iconProps} /></p>
            <p>{meta.frontmatter.address}<MapPin {...iconProps} /></p>
            <p><a href={`https://${meta.frontmatter.website}`}>{meta.frontmatter.website}</a><MousePointer {...iconProps} /></p>
            <p><a href={`https://${meta.frontmatter.linkedin}`}>{meta.frontmatter.linkedin}</a><Linkedin {...iconProps} /></p>
            <p><a href={`https://${meta.frontmatter.github}`}>{meta.frontmatter.github}</a><GitHub {...iconProps} /></p>
          </ContactWrapper>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col lg='45%' sm='100%'>
          <h3>WORK EXPERIENCE</h3>
          {meta.frontmatter.workExperiences.map(item => (
            <WorkExperience
              key={item.title}
              {...item}
            />
          ))}
          <ReferenceDesktop>
            <h3>REFERENCES</h3>
            {meta.frontmatter.references.map(item => (
              <Reference
                key={item.name}
                {...item}
              />
            ))}
          </ReferenceDesktop>
        </Col>
        <Col lg='45%' sm='100%'>
          <h3>SKILLS</h3>
          <div style={{ marginBottom: 20 }}>
            {meta.frontmatter.skills.map(item => <Skill key={item.title}>{item.title}</Skill>)}
          </div>
          <h3>PROJECTS</h3>
          <div>
            {meta.frontmatter.projects.map(item => (
              <Project
                key={item.title}
                title={item.title}
                url={item.url}
                time={item.time}
                detail={item.detail}
              />
            ))}
          </div>
          <ReferenceMobile>
            <h3>REFERENCES</h3>
            {meta.frontmatter.references.map(item => (
              <Reference
                key={item.name}
                {...item}
              />
            ))}
          </ReferenceMobile>
        </Col>
      </Row>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    meta: markdownRemark(
      fileRelativePath: { eq: "/content/meta.md" }
    ) {
      id
      frontmatter {
        name
        title
        workExperiences {
          title
          companyName
          companyUrl
          time
          location
          description
          detail
        }
        skills {
          title
        }
        projects {
          title
          url
          time
          detail
        }
        references {
          name
          position
          email
          phone
        }
        email
        phone
        address
        website
        linkedin
        github
      }
      html
      fileRelativePath
      rawFrontmatter
      rawMarkdownBody
    }
  }
`

export default remarkForm(IndexPage, {
  queryName: 'meta',
  fields: [
    {
      label: 'Fullname',
      name: 'rawFrontmatter.name',
      component: 'text',
    },
    {
      label: 'Title',
      name: 'rawFrontmatter.title',
      component: 'text',
    },
    {
      label: 'Introduction',
      name: 'rawMarkdownBody',
      component: 'markdown',
    },
    {
      label: 'Contact information',
      component: 'group',
      name: 'rawFrontmatter',
      fields: [
        {
          label: 'Email',
          name: 'email',
          component: 'text',
        },
        {
          label: 'Phone',
          name: 'phone',
          component: 'text',
        },
        {
          label: 'Address',
          name: 'address',
          component: 'text',
        },
        {
          label: 'Website',
          name: 'website',
          component: 'text',
        },
        {
          label: 'Linkedin',
          name: 'linkedin',
          component: 'text',
        },
        {
          label: 'Github',
          name: 'github',
          component: 'text',
        },
      ],
    },
    {
      label: 'Work experiences',
      component: 'group-list',
      name: 'rawFrontmatter.workExperiences',
      itemProps: (item) => ({
        label: item.title ? `${item.title}${item.companyName && ` at ${item.companyName}`}` : "New work experience",
      }),
      fields: [
        { label: "Title", name: "title", component: 'text' },
        { label: "Company", name: "companyName", component: 'text' },
        { label: "Website", name: "companyUrl", component: 'text' },
        { label: "Time", name: "time", component: 'text' },
        { label: "Location", name: "location", component: 'text' },
        { label: "Description", name: "description", component: 'text' },
        { label: "Detail", name: "detail", component: 'markdown' },
      ],
    },
    {
      label: 'Projects',
      component: 'group-list',
      name: 'rawFrontmatter.projects',
      itemProps: (item) => ({
        label: item.title || "New project",
      }),
      fields: [
        { label: "Title", name: "title", component: 'text' },
        { label: "Website", name: "url", component: 'text' },
        { label: "Time", name: "time", component: 'text' },
        { label: "Detail", name: "detail", component: 'markdown' },
      ],
    },
    {
      label: 'Skills',
      component: 'group-list',
      name: 'rawFrontmatter.skills',
      itemProps: (item) => ({
        label: item.title || "New skill",
      }),
      fields: [
        { label: "Title", name: "title", component: 'text' },
      ],
    },
    {
      label: 'References',
      component: 'group-list',
      name: 'rawFrontmatter.references',
      itemProps: (item) => ({
        label: item.name || "New reference",
      }),
      fields: [
        { label: "Name", name: "name", component: 'text' },
        { label: "Position", name: "position", component: 'text' },
        { label: "Email", name: "email", component: 'text' },
        { label: "Phone", name: "phone", component: 'text' },
      ],
    },
  ],
});