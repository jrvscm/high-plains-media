import React, { useRef, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { useLoading } from '../components/contexts/LoadingContext';

// Optional: Styled component for custom styles
const StyledForm = styled(Form)`
  .form-floating {
    margin-bottom: 20px;

    label {
      color: ${({ theme }) => theme.colors.lightGray};
    }
  }

  .btn-primary {
    background-color: ${({ theme }) => theme.colors.blue};
    border-color: ${({ theme }) => theme.colors.blue};

    &:hover {
      filter: brightness(90%);
    }
  }
`;

export const ContactForm = () => {
    const [formData, setFormData] = useState({
      'bot-field': '', // Honeypot field
      'form-name': 'contact-peak-digital', // Required for Netlify to recognize the form
      'name': '',
      'email': '',
      'subject': '',
      'message': ''
  });
  const { startLoading, stopLoading } = useLoading();
  // Form submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    startLoading();
    try {
      const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setFormData({
          'bot-field': '', // Honeypot field
          'form-name': 'contact-peak-digital', 
          'name': '',
          'email': '',
          'subject': '',
          'message': ''
        })
      } else {
          // Handle errors
          console.error('Form submission error');
      }
  } catch (error) {
    console.error('Form submission error', error);
  }
    stopLoading();
  };
  

  const handleChange = (e) => {
    const value = (e.target.name != 'message' && e.target.name != 'subject') ? e.target.value.trim() : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <Container>
      <StyledForm 
        name="contact-peak-digital"
        onSubmit={handleSubmit} 
        method="POST" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        netlify
      >
        {/* Hidden field for Netlify */}
        <input type="hidden" name="form-name" value="contact-peak-digital" />
        <input type="hidden" name="bot-field" onChange={handleChange} /> {/* Honeypot field */}

        <Row>
          <Col md={6}>
            <Form.Floating>
              <Form.Control type="text" id="name" name="name" placeholder="Your Name" onChange={handleChange} value={formData.name} required />
              <label htmlFor="name">Your Name</label>
            </Form.Floating>
          </Col>
          <Col md={6}>
            <Form.Floating>
              <Form.Control type="email" id="email" name="email" placeholder="Your Email" onChange={handleChange} value={formData.email} required />
              <label htmlFor="email">Your Email</label>
            </Form.Floating>
          </Col>
        </Row>
        
        <Form.Floating>
          <Form.Control type="text" id="subject" name="subject" placeholder="Subject" onChange={handleChange} value={formData.subject} required />
          <label htmlFor="subject">Subject</label>
        </Form.Floating>
        
        <Form.Floating>
          <Form.Control as="textarea" id="message" name="message" placeholder="Message" style={{ height: '120px' }} onChange={handleChange} value={formData.message} required />
          <label htmlFor="message">Message</label>
        </Form.Floating>
        
        <div className="text-center">
          <Button type="submit" className="mt-2 btn-primary">Send Message</Button>
        </div>
      </StyledForm>
    </Container>
  );
};

export default ContactForm;
