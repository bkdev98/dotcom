import React from 'react'
import { ExternalLink } from 'react-feather'

const WorkExperience = ({ title, companyName, companyUrl, time, location }) => (
  <div style={{ marginBottom: 20 }}>
    <div style={{ position: 'relative' }}>
      <div style={{ position: "absolute", left: -60, top: 0, width: 20, height: '100%', background: '#333' }} />
      <h5 style={{ marginBottom: 5 }}>{title}</h5>
      <a href={companyUrl}>{companyName}<ExternalLink color='#333' size={14} style={{ marginLeft: 5, verticalAlign: 'middle' }} /></a>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontStyle: 'italic', fontSize: 13 }}>
      <span>{time}</span>
      <span>{location}</span>
    </div>
    <p>Voluptate mollit cillum occaecat sint aliquip ex eu laboris pariatur. Eiusmod enim consectetur sit pariatur tempor est ut laborum.</p>
    <ul>
      <li>Proident adipisicing dolore ut deserunt.</li>
      <li>Fugiat tempor labore commodo dolor mollit occaecat tempor consequat.</li>
      <li>Occaecat voluptate aute ea et esse ipsum consectetur.</li>
    </ul>
  </div>
);

export default WorkExperience;
