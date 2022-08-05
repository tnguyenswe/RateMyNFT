/** @jsxImportSource theme-ui */
import { Grid, Label, Box, Input, Textarea, Button, Flex, Image, Text } from "theme-ui";
import React from "react";
import Headline from '../../src/components/Headline';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SingleCard from '../components/PreviewCards/SingleCard';
import { useLocation, Link } from "react-router-dom";
import { CircleWavyCheck } from 'phosphor-react';


const CardHref = (props) => (<Link to={`/reviews/${props.projectHref}`} state={{ projectName: props.projectName, background: props.background, primary: props.primary, creatorName: props.creatorName, projectHref: props.projectHref }} {...props} sx={{ textDecoration: 'none', color: 'inherit' }}>{props.children}</Link>)

const CardLayout = (props) => (<Flex {...props} sx={{ minWidth: '90vw', maxWidth: '90vw', height: '100%', borderRadius: '40px', flexDirection: 'column', pb: '30px', overflow: 'hidden' }}>{props.children}</Flex>)

const CardBackground = ({ background, ...props }) => (<Image src={background} sx={{ maxHeight: '200px', height: '200px', minHeight: '240px', width: '100%', objectFit: 'cover', borderRadius: '40px' }} />)

const PrimaryImage = ({ primary, ...props }) => (<Flex sx={{ minWidth: '140px', minHeight: '140px', alignSelf: 'start', position: 'relative', mt: ['0px', '-50px'], backgroundColor: '#0508104D', borderRadius: '50%', padding: '6px', ml: ['10px', '60px'], }}><Image src={primary} sx={{ maxWidth: '130px', maxHeight: '130px', objectFit: 'cover', borderRadius: '50%' }} /></Flex>)

const TextContainer = (props) => (<Flex {...props} sx={{ alignSelf: ['center','start'], justifyContent: 'center', alignItems: 'start', flexDirection: 'column', pt: '20px', ml: '20px', width: '100%' }}>{props.children}</Flex>)

const Reviews = (props) => {
    const location = useLocation();
    const CardsData = location.state
    const [filteredReviews, setFilteredReviews] = useState([]);

    return (
        <Flex sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <CardHref projectHref={CardsData.projectHref} projectName={CardsData.projectName} background={CardsData.background} primary={CardsData.primary} creatorName={CardsData.creatorName}>
                <CardLayout>
                    <CardBackground background={CardsData.background} />
                    <Flex sx={{ width: '100%', flexDirection: ['column', null, null, 'row'] }}>
                        <Flex sx={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                        <PrimaryImage primary={CardsData.primary} />
                        <TextContainer>
                            <Headline sx={{ pb: '10px', textAlign: 'start', fontSize: 4, fontWeight: '600' }}>{CardsData.projectName}</Headline>
                            <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text sx={{ color: 'navy0', pr: '2px', fontSize: 2, fontWeight: '600', textAlign: 'center' }}>by {CardsData.creatorName}</Text>
                                <CircleWavyCheck size={20} sx={{ color: 'navy0' }} />
                            </Flex>
                        </TextContainer>
                        </Flex>
                        <Grid sx={{ gridTemplateColumns: ['1fr 1fr', '1fr 1fr 1fr 1fr'], width: ['90%', null, null, '100%'], pt: ['20px', null, null, '0px'], justifySelf: 'center', alignSelf: 'center' }}>
                            <Flex sx={{ flexDirection: 'column' }}>
                                <Text sx={{ fontSize: 4, fontWeight: '700', textAlign: ['center', null, null, 'start'] }}>
                                    10.0k
                                </Text>
                                <Text sx={{ fontSize: 2, color: 'gray50', textAlign: ['center', null, null, 'start'] }}>
                                    Total Supply
                                </Text>
                            </Flex>

                            <Flex sx={{ flexDirection: 'column' }}>
                                <Text sx={{ fontSize: 4, fontWeight: '700', textAlign: ['center', null, null, 'start'] }}>
                                    6.4k
                                </Text>
                                <Text sx={{ fontSize: 2, color: 'gray50', textAlign: ['center', null, null, 'start'] }}>
                                    Total Holders
                                </Text>
                            </Flex>

                            <Flex sx={{ flexDirection: 'column' }}>
                                <Text sx={{ fontSize: 4, fontWeight: '700', textAlign: ['center', null, null, 'start'] }}>
                                    644.1k
                                </Text>
                                <Text sx={{ fontSize: 2, color: 'gray50', textAlign: ['center', null, null, 'start'] }}>
                                    Total Volume
                                </Text>
                            </Flex>

                            <Flex sx={{ flexDirection: 'column' }}>
                                <Text sx={{ fontSize: 4, fontWeight: '700', textAlign: ['center', null, null, 'start'] }}>
                                    Ξ 82.08
                                </Text>
                                <Text sx={{ fontSize: 2, color: 'gray50', textAlign: ['center', null, null, 'start'] }}>
                                    Floor Price
                                </Text>
                            </Flex>





                        </Grid>
                    </Flex>
                </CardLayout>
            </CardHref>
        </Flex>
    );
};

export default Reviews;