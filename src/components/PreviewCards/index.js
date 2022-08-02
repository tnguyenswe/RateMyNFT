/** @jsxImportSource theme-ui */
import SingleCard from './SingleCard';
import React from 'react';
import { Grid } from 'theme-ui';

const CardsData = [
    {
        projectName: 'Bored Ape Yacht Club',
        projectHref: 'BoredApeYachtClub',
        creatorName: 'BoredApeYachtClub',
        creatorLink: 'https://opensea.io/BoredApeYachtClub?tab=created',
        background: 'https://lh3.googleusercontent.com/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs=h600',
        primary: 'https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s130',
    },
    {
        projectName: 'Clone X - X Takashi Murakami',
        projectHref: 'CloneX',
        creatorName: 'RTFKTCLONEXTM',
        creatorLink: 'https://opensea.io/collection/clonex',
        background: 'https://lh3.googleusercontent.com/4elUtz8UyFYDH34vDxd4hpQX8S-EdkFq8s9ombkuQTDBWLwHvsjRM_RXWT2zX8Vt2bAiO2BHslwN57FyTW1JIn_FyFI0BsZfmvmeJQ=h600',
        primary: 'https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s168',
    },
    // {
    //     projectName: 'Psychedelics Anonymous Genesis',
    //     creatorName: 'Psychedelics-Anonymous',
    //     creatorLink: 'https://opensea.io/Psychedelics-Anonymous?tab=created',
    //     background: 'https://lh3.googleusercontent.com/Ztbsa_YCs23MJCTLA9DiQUyeO3uSJXRRwEQtoUMF39vhqaxTqrshwU_g1sGRH0XvC7X6w1o1WIR_r7KsO0fNbA8PKQbfiCvBoxcjBw=h600',
    //     primary: 'https://lh3.googleusercontent.com/9VndAx-5SvVdamB8KvABGcw2bdXMdeyEYdhHJ22WMV98C2yS85SDT5rnBtT0zOxVjeJ6KBz2fXKXcYSIXeOc7aGiU4i0Rx9IwaMfO9o=s130'
    // },
    {
        projectName: 'Azuki',
        projectHref: 'Azuki',
        creatorName: 'TeamAzuki',
        creatorLink: 'https://opensea.io/TeamAzuki?tab=created',
        background: 'https://lh3.googleusercontent.com/O0XkiR_Z2--OPa_RA6FhXrR16yBOgIJqSLdHTGA0-LAhyzjSYcb3WEPaCYZHeh19JIUEAUazofVKXcY2qOylWCdoeBN6IfGZLJ3I4A=h600',
        primary: 'https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0'
    }
];

const PreviewCards = () => {

    return (
        <Grid sx={{ maxWidth: '90%', gridTemplateColumns: ['1fr', '1fr 1fr', null, '1fr 1fr 1fr'], gridColumnGap: ['10px', '30px', null, '50px'], gridRowGap: ['20px', '20px'] }}>
            {
                CardsData.map((data, i) => {
                    return (<SingleCard
                        key={i}
                        creatorName={CardsData[i].creatorName}
                        creatorLink={CardsData[i].creatorLink}
                        projectName={CardsData[i].projectName}
                        background={CardsData[i].background}
                        projectHref={CardsData[i].projectHref}
                        primary={CardsData[i].primary} />);
                }
                )
            }
        </Grid>
    );
}

export default PreviewCards;