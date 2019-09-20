import React from 'react'
import { ExternalLink } from 'react-feather'

const Project = ({ title, url, time, detail }) => (
  <div style={{ marginBottom: 20 }}>
    <div>
      <p style={{ display: 'inline-block', letterSpacing: 1, fontWeight: 600, fontSize: 16 }}>{title}</p>
      <span style={{ marginLeft: 10, fontStyle: 'italic' }}>{time}</span>
    </div>
    <a href={url}>{url}<ExternalLink color='#333' size={14} style={{ marginLeft: 5, verticalAlign: 'middle' }} /></a>
    <ul>
      {detail.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
  </div>
);

export default Project;
