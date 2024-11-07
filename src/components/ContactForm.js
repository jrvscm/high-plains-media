import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import useResponsive from '../components/hooks/useResponsive';
import { useLoading } from '../components/contexts/LoadingContext';

const StyledForm = styled(Form)`
  margin: 0 auto;
  .form-floating {
    margin-bottom: ${({ $isMobile }) => $isMobile ? '16px' : '32px'};
    label {
      padding-left: 20px;
      color: ${({ theme }) => theme.colors.lightGray} !important;
      
      &::after {  
        background: transparent !important;
      }
    }

    textarea,
    input {    
      box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.6); /* Inset shadow for depth effect */
      background: ${({ theme }) => theme.colors.primaryLight};
      border-top-right-radius: 100px;
      border-bottom-right-radius: 100px;
      border-top-left-radius: 100px;
      border-bottom-left-radius: 100px;
      color: ${({ theme }) => theme.colors.white} !important;
      padding-left: 20px;
    }

    textarea {
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
    }
  }

  .btn-primary {
    min-width: 25vw;
    background-color: ${({ theme }) => theme.colors.white};
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    font-family: 'Orbitron', sans-serif;
    font-size: 28px;
    text-transform: uppercase;
    border-radius: 50px;
    transition: all .3s ease;
    &:hover {
      filter: brightness(90%);
      background: transparent;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const BtnWrapper = styled.div`
  margin-top: ${({ $isMobile }) => $isMobile ? '16px' : '28px'};

`;

export const ContactForm = ({ setHovered }) => {
    const [formData, setFormData] = useState({
      'bot-field': '', // Honeypot field
      'form-name': 'contact-peak-digital', // Required for Netlify to recognize the form
      'name': '',
      'email': '',
      'phone': '',
      'subject': '',
      'message': ''
  });
  const { isMobile } = useResponsive();
  const { startLoading, stopLoading } = useLoading();
  // Form submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    startLoading();
    try {
      const response = await fetch('/__forms.html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setFormData({
          'bot-field': '', // Honeypot field
          'form-name': 'contact-peak-digital', 
          'name': '',
          'phone': '',
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
        $isMobile={isMobile}
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
          <Col md={6} className={isMobile ? 'px-0' : ''}>
            <Form.Floating>
              <Form.Control onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} type="text" id="name" name="name" placeholder="Your Name" onChange={handleChange} value={formData.name} required />
              <label htmlFor="name">Your Name</label>
            </Form.Floating>
          </Col>
          <Col md={6} className={isMobile ? 'px-0' : ''}>
            <Form.Floating>
              <Form.Control onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} type="email" id="email" name="email" placeholder="Your Email" onChange={handleChange} value={formData.email} required />
              <label htmlFor="email">Your Email</label>
            </Form.Floating>
          </Col>
        </Row>

        <Row>
          <Col md={6}className={isMobile ? 'px-0' : ''}>
            <Form.Floating>
              <Form.Control onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} type="text" id="phone" name="phone" placeholder="Phone (optional)" onChange={handleChange} value={formData.phone}/>
              <label htmlFor="phone">Phone (optional)</label>
            </Form.Floating>
          </Col>
          <Col md={6} className={isMobile ? 'px-0' : ''}>
            <Form.Floating>
              <Form.Control onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} type="text" id="subject" name="subject" placeholder="Subject" onChange={handleChange} value={formData.subject} required />
              <label htmlFor="subject">Subject</label>
            </Form.Floating>
          </Col>
        </Row>

        <Row>
          <Col md={12} className={isMobile ? 'px-0' : ''}>
            <Form.Floating>
              <Form.Control onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} as="textarea" id="message" name="message" placeholder="Message" style={{ height: '400px' }} onChange={handleChange} value={formData.message} required />
              <label htmlFor="message">Message</label>
            </Form.Floating>
          
            <BtnWrapper className="text-center" $isMobile={isMobile}>
              <Button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} type="submit" className="mt-2 btn-primary" style={{width: isMobile ? '100%' : ''}}>submit</Button>
            </BtnWrapper>
          </Col>
        </Row>
      </StyledForm>
      </Container>
  );
};

export default ContactForm;
