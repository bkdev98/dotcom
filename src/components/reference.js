import React from 'react'
import { Mail, Phone } from 'react-feather'

const Reference = ({ name, position, email, phone }) => (
  <div style={{ marginBottom: 20 }}>
    <div>
      <p style={{ display: 'inline-block', fontWeight: 600, fontSize: 16 }}>{name}</p>
      <p style={{ fontStyle: 'italic' }}>{position}</p>
    </div>
    <p>
      <Mail color='#333' size={14} style={{ marginRight: 10, verticalAlign: 'middle' }} />
      <a href={`mailto:${email}`}>{email}</a>
    </p>
    <p>
      <Phone color='#333' size={14} style={{ marginRight: 10, verticalAlign: 'middle' }} />
      <a href={`tel:${phone}`}>{phone}</a>
    </p>
  </div>
);

export default Reference;
