/** @jsxImportSource theme-ui */
import SingleCard from './SingleCard';
import React from 'react';
import { Grid } from 'theme-ui';
import BAYCLogo from '../../assets/bayc-logo.png';

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
    },
    {
        projectName: 'Cool Cats',
        projectHref: 'CoolCats',
        creatorName: 'CoolCatsContract',
        creatorLink: 'https://opensea.io/collection/cool-cats-nft',
        background: 'https://lh3.googleusercontent.com/H4Iu36XQNJqVlF99-0BuQna0sUlUcIrHt97ss3le_tAWw8DveEBfTktX3S0bP6jpC9FhN1CKZjoYzZFXpWjr1xZfQIwSSLeDjdi0jw=h600',
        primary: 'https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s168'
    },
    {
        projectName: 'Doodles',
        projectHref: 'Doodles',
        creatorName: 'Doodles_LLC',
        creatorLink: 'https://opensea.io/collection/doodles-official',
        background: 'https://lh3.googleusercontent.com/svc_rQkHVGf3aMI14v3pN-ZTI7uDRwN-QayvixX-nHSMZBgb1L1LReSg1-rXj4gNLJgAB0-yD8ERoT-Q2Gu4cy5AuSg-RdHF9bOxFDw=h600',
        primary: 'https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s168'
    },
    {
        projectName: 'CryptoPunks',
        projectHref: 'CryptoPunks',
        creatorName: 'CryptoPunks',
        creatorLink: 'https://opensea.io/collection/cryptopunks',
        background: 'https://lh3.googleusercontent.com/48oVuDyfe_xhs24BC2TTVcaYCX7rrU5mpuQLyTgRDbKHj2PtzKZsQ5qC3xTH4ar34wwAXxEKH8uUDPAGffbg7boeGYqX6op5vBDcbA=h600',
        primary: 'https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s168'
    }
];

const PreviewCards = () => {

    return (
        <Grid sx={{ 
            backgroundColor: 'navy50',
            width: '100%',
            gridTemplateColumns: ['1fr', null, '1fr 1fr', '1fr 1fr 1fr'],
            alignItems: 'center',
            justifyItems: 'center',
            py: '20px',
            borderRadius: '40px',
            gridColumnGap: ['10px', '30px', null, '50px'], 
            gridRowGap: ['20px', '60px'] }}>
            {
                CardsData.map((data, i) => {
                    return (<SingleCard
                        key={i}
                        creatorName={CardsData[i].creatorName}
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