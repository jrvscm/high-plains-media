import styled, { css } from 'styled-components';
import { Container, Row, Col, Form, FloatingLabel, Button as BootstrapButton } from 'react-bootstrap';
import TitleWithPill from '../components/TitleWithPill';
import { device } from '../styles/breakpoints';

const Section = styled.section`
  background: ${({ theme }) => theme.colors.white};
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewsletterForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  box-shadow: ${({ theme }) => theme.tokens.cardBoxShadow};

  .form-floating {
    flex-grow: 1;
    input {
        height: 38px; // Standard height to align with Bootstrap's default button size
        border-top-right-radius: 0px;  /* Apply radius to the top-right corner */
        border-bottom-right-radius: 0px;  /* Apply radius to the bottom-right corner */
        border-top-left-radius: 10px;  /* Apply radius to the top-right corner */
        border-bottom-left-radius: 10px; 
    }

    label {
      color: ${({ theme }) => theme.colors.lightGray};
    }
  }

  @media ${device.tablet} {
      max-width: 400px;
  }
`;

// Overriding default button styling to match the input height
const StyledButton = styled(BootstrapButton)`
    height: 58px; // Ensures button is the same height as the input
    padding: 0 12px; // Adjust padding to ensure text fits well
    ${({ theme }) => theme.fonts.font20TextRegular}; // Ensure the font matches
    color: ${({ theme }) => theme.colors.white};
    border-top-right-radius: 10px;  /* Apply radius to the top-right corner */
    border-bottom-right-radius: 10px;  /* Apply radius to the bottom-right corner */
    border-top-left-radius: 0;  /* Remove radius from the top-left corner */
    border-bottom-left-radius: 0;  
`;

export const NewsletterSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <Section className="py-5">
      <Container>
        <Row>
            <TitleWithPill title={'Subscribe'} headline={'Join Our Newsletter'} subhead={'Subscribe for deals, free tools, and the occasional give away.'} spanText={''} />
        </Row>
        <Row className="justify-content-center">
          <Col>
            <NewsletterForm 
              className="mx-auto"
              name="email-subscription" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field" 
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="email-subscription" />
              <input type="hidden" name="bot-field" />
              <FloatingLabel controlId="floatingInput" label="Email">
                <Form.Control type="email" placeholder="Email address" required />
              </FloatingLabel>
              <StyledButton variant="primary" type="submit">Submit</StyledButton>
            </NewsletterForm>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default NewsletterSection;
