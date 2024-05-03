import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

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
  // Form submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement submission logic here, for now, just logs to console
    console.log("Form submitted");
  };

  return (
    <Container>
      <StyledForm 
        onSubmit={handleSubmit} 
        method="POST" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
      >
        {/* Hidden field for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <Row>
          <Col md={6}>
            <Form.Floating>
              <Form.Control type="text" id="name" name="name" placeholder="Your Name" required />
              <label htmlFor="name">Your Name</label>
            </Form.Floating>
          </Col>
          <Col md={6}>
            <Form.Floating>
              <Form.Control type="email" id="email" name="email" placeholder="Your Email" required />
              <label htmlFor="email">Your Email</label>
            </Form.Floating>
          </Col>
        </Row>
        
        <Form.Floating>
          <Form.Control type="text" id="subject" name="subject" placeholder="Subject" required />
          <label htmlFor="subject">Subject</label>
        </Form.Floating>
        
        <Form.Floating>
          <Form.Control as="textarea" id="message" name="message" placeholder="Message" style={{ height: '120px' }} required />
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
