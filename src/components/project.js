import React from 'react'
import { ExternalLink } from 'react-feather'
import ReactMarkdown from 'react-markdown'

const Project = ({ title, url, time, detail }) => (
  <div style={{ marginBottom: 20 }}>
    <div>
      <p style={{ display: 'inline-block', fontWeight: 600, fontSize: 16 }}>{title}</p>
      {time && <span style={{ marginLeft: 10, fontStyle: 'italic' }}>{time}</span>}
    </div>
    {url && <a href={url}>{url}<ExternalLink color='#333' size={14} style={{ marginLeft: 5, verticalAlign: 'middle' }} /></a>}
    <ReactMarkdown source={detail} />
  </div>
);

export default Project;
