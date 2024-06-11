import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Avatar from '../components/Avatar';
import { FaStar } from 'react-icons/fa';
import { device } from '../styles/breakpoints';

const Section = styled.section`
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;

    &::before {
        background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%),
                url(${({$imageSrc}) => $imageSrc}) no-repeat center center;
        background-size: cover;
        content: '';
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        will-change: transform;
        z-index: -1;
    }
`;

const SContainer = styled(Container)`
    max-width: 960px;
    @media ${device.tablet} {
        .carousel {
            .carousel-control-next {
                right: -16px;
            }
            .carousel-control-prev {
                left: -16px;
            }
        }
    }
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

const Stars = styled.div`
    color: #FDCC0D;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`;

const reviews = [
    {
        name: "Jessica Thompson",
        title: "Marketing Director",
        testimonial: "\"I had an exceptional experience working with Peak Digital! Their team was incredibly professional and responsive throughout the entire project. They delivered a stunning website that perfectly matches our brand's vision. The attention to detail and the seamless functionality of the site exceeded our expectations. We’ve already seen an increase in customer engagement and positive feedback from our clients. Highly recommend!\"",
        imageUrl: null
    },
    {
        name: "Michael Rodriguez",
        title: "CEO",
        testimonial: "\"Peak Digital truly transformed our online presence. From the initial consultation to the final launch, their expertise and creativity shone through. They provided valuable insights and suggestions that enhanced our website’s design and user experience. The project was completed on time and within budget, with excellent communication every step of the way. Our website looks fantastic and performs flawlessly. We couldn't be happier with the results!\"",
        imageUrl: null
    },
    {
        name: "Sarah Mitchell",
        title: "Operations Manager",
        testimonial: "\"Working with Peak Digital was a game-changer for our business. Their team is knowledgeable, efficient, and incredibly talented. They took the time to understand our goals and delivered a custom website that has significantly boosted our online visibility. The site is fast, user-friendly, and beautifully designed. Their ongoing support and maintenance have been top-notch as well. If you need a web development firm that delivers outstanding results, look no further than Peak Digital!\"",
        imageUrl: null
    }
];

export const ReviewsCarousel = ({ imageSrc }) => {
    return (
        <Section $imageSrc={imageSrc} className="py-5">
            <SContainer>
                <Carousel className="pb-5" style={{minHeight: '438px'}} interval={null}>
                    {reviews.map((review, index) => (
                        <Carousel.Item key={index}>
                            <Row className="justify-content-center align-items-center pt-5 pb-4">
                                <Avatar imageUrl={review.imageUrl} name={review.name} />
                            </Row>
                            <Row className="justify-content-center">
                                <Wrapper>
                                    <Stars>
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </Stars>
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
    );
};

export default ReviewsCarousel;
