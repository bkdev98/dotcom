import React from 'react'
import { ExternalLink } from 'react-feather'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

const Decorator = styled.div`
  position: absolute;
  left: -62px;
  top: 0px;
  width: 22px;
  height: 100%;
  background: #333333;
  @media (max-width: 808px) {
    left: -42px;
  }
`

const WorkExperience = ({ title, companyName, companyUrl, time, location, description, detail }) => (
  <div style={{ marginBottom: 20 }}>
    <div style={{ position: 'relative' }}>
      {/* <Decorator /> */}
      <h5 style={{ marginBottom: 5 }}>{title}</h5>
      <a href={companyUrl}>{companyName}<ExternalLink color='#333' size={14} style={{ marginLeft: 5, verticalAlign: 'middle' }} /></a>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontStyle: 'italic', fontSize: 13 }}>
      <span>{time}</span>
      <span>{location}</span>
    </div>
    <p>{description}</p>
    <ReactMarkdown source={detail} />
  </div>
);

export default WorkExperience;
