import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Avatar from '../components/Avatar';

const Section = styled.section`
    position: relative;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%),
                url(${({$imageSrc}) => $imageSrc}) no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
`;

const SContainer = styled(Container)`
    max-width: 960px;
`;

const Wrapper = styled.div`
    position: relative;
    width: fit-content;
    text-align: center;
`;

const H3 = styled.h6`
    ${({ theme }) => theme.fonts.font20TextBold};
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.white};
`;

const P = styled.p`
    ${({ theme }) => theme.fonts.font13TextRegular};
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.white};
`;

const BlockQuote = styled.blockquote`
    ${({ theme }) => theme.fonts.font15TextRegular};
    color: ${({ theme }) => theme.colors.white};
    font-style: italic;
    text-align: center;
    max-width: 80%;
    position: relative;
`;

const reviews = [
    {
        name: "Chris Jarvis",
        title: "Dude of Dudes",
        testimonial: "\"Peak digital built a great web app for my business. All my dreams came true because of them! Hiring them was the best thing ever I am so rich now!\"",
        imageUrl: '/images/headshot.jpg'
    },
    {
        name: "Jane Doe",
        title: "Queen of Quality",
        testimonial: "\"Their attention to detail is unmatched. Couldn't be happier with the results! Some more text to make it not jump.\"",
        imageUrl: '/images/headshot.jpg'
    },
    {
        name: "John Smith",
        title: "Tech Lead",
        testimonial: "\"Very professional team. They delivered on time and exceeded my expectations! Some more text to quit the jumpingshit.\"",
        imageUrl: '/images/headshot.jpg'
    }
];

export const ReviewsCarousel = ({ imageSrc }) => {
    return (
        <Section $imageSrc={imageSrc} className="py-5">
            <SContainer>
                <Carousel className="pb-5">
                    {reviews.map((review, index) => (
                        <Carousel.Item key={index}>
                            <Row className="justify-content-center align-items-center pt-5 pb-4">
                                <Avatar imageUrl={review.imageUrl} />
                            </Row>
                            <Row className="justify-content-center">
                                <Wrapper>
                                    <H3>{review.name}</H3>
                                    <P>{review.title}</P>
                                </Wrapper>
                            </Row>
                            <Row className="justify-content-center">
                                <BlockQuote>{review.testimonial}</BlockQuote>
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </SContainer>
        </Section>
    )
}

export default ReviewsCarousel;
