/** @jsxImportSource theme-ui */
import { Flex, Image, Text } from 'theme-ui';
import { CircleWavyCheck } from 'phosphor-react';
import Headline from '../../Headline';
import { Link } from "react-router-dom";

const CardHref = (props) => (<Link to={`/reviews/${props.projectHref}`} {...props} sx={{ textDecoration: 'none', color: 'inherit' }}>{props.children}</Link>)

const CardLayout = (props) => (<Flex {...props} sx={{ width: ['280px','260px','280px','300px'], height: '325px', borderRadius: '10px', flexDirection: 'column', border: '2px solid #22192E', pb: '30px', overflow: 'hidden' }}>{props.children}</Flex>)

const CardBackground = ({background, ...props}) => (<Image src={background} sx={{ maxWidth: ['280px','260px','280px','300px'], height: '150px', width: '100%', objectFit: 'cover' }} />)

const PrimaryImage = ({primary, ...props}) => (<Image src={primary} sx={{ alignSelf: 'center', position: 'relative', mt: '-65px', maxWidth: '110px', maxHeight: '110px', objectFit: 'cover', borderRadius: '50%' }} />)

const TextContainer = (props) => (<Flex {...props} sx={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', pt: '10px' }}>{props.children}</Flex>)

const PreviewCards = ({ projectName, background, primary, creatorName, creatorLink, projectHref }) => {
    return (
        <CardHref projectHref={projectHref}>
            <CardLayout>
                <CardBackground background={background}/>
                <PrimaryImage primary={primary} />
                <TextContainer>
                    <Headline sx={{ pb: '10px', maxWidth: '200px', textAlign: 'center', fontSize: [3,2,3], fontWeight: '600' }}>{projectName}</Headline>
                    <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text sx={{ color: theme => theme.mainColors.pink50, pr: '2px', fontSize: [2,1,2], fontWeight: '600' }}>by {creatorName}</Text>
                        <CircleWavyCheck size={20} sx={{ color: theme => theme.mainColors.pink50 }} />
                    </Flex>
                </TextContainer>
            </CardLayout>
        </CardHref>
    )
}

export default PreviewCards