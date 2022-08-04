/** @jsxImportSource theme-ui */
import { Flex, Image, Text, Box } from 'theme-ui';
import { CircleWavyCheck } from 'phosphor-react';
import Headline from '../../Headline';
import { Link } from "react-router-dom";

const CardHref = (props) => (<Link to={`/reviews/${props.projectHref}`} {...props} sx={{ textDecoration: 'none', color: 'inherit' }}>{props.children}</Link>)

const CardLayout = (props) => (<Flex {...props} sx={{ width: ['340px','400px','340px','360px'], height: '400px', borderRadius: '40px', flexDirection: 'column', pb: '30px', overflow: 'hidden', backgroundColor: 'navy40' }}>{props.children}</Flex>)

const CardBackground = ({background, ...props}) => (<Image src={background} sx={{ maxWidth: ['340px','400px','340px','360px'], maxHeight: '200px', height: '200px', minHeight: '240px', width: '100%', objectFit: 'cover', borderRadius: '40px' }} />)

const PrimaryImage = ({primary, ...props}) => (<Box sx={{alignSelf: 'center', position: 'relative', mt: '-65px',}}><Image src={primary} sx={{ maxWidth: '110px', maxHeight: '110px', objectFit: 'cover', borderRadius: '50%' }} /></Box>)

const TextContainer = (props) => (<Flex {...props} sx={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', pt: '10px' }}>{props.children}</Flex>)

const PreviewCards = ({ projectName, background, primary, creatorName, creatorLink, projectHref }) => {
    return (
        <CardHref projectHref={projectHref}>
            <CardLayout>
                <CardBackground background={background}/>
                <PrimaryImage primary={primary} />
                <TextContainer>
                    <Headline sx={{ pb: '10px', textAlign: 'center', fontSize: [3,2,3], fontWeight: '600' }}>{projectName}</Headline>
                    <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text sx={{ color: 'navy0', pr: '2px', fontSize: [2,1,2], fontWeight: '600' }}>by {creatorName}</Text>
                        <CircleWavyCheck size={20} sx={{ color: 'navy0' }} />
                    </Flex>
                </TextContainer>
            </CardLayout>
        </CardHref>
    )
}

export default PreviewCards