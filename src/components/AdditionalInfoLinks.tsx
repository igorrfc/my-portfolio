import React from 'react';
import styled, { keyframes } from 'styled-components';

import GithubIcon from './icons/Github';
import LinkedinIcon from './icons/Linkedin';
import ResumeIcon from './icons/Resume';

import {AddionalInfo} from '../constants';

const showLinkAnimation = keyframes`
  from {
    opacity: 0;
    margin-left: 5px;
  }
  
  to {
    opacity: 1;
    margin-left: 12px;
  }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 900px) {
        flex-direction: row;
        justify-content: center;
    }
`;

const Link = styled.a<{name: string, delay: number}>`
    margin-bottom: 3px;
    cursor: pointer;
    position: relative;
    animation: ${showLinkAnimation} 500ms ease-in-out ${({ delay }) => delay * 0.1}s both;
    
    &:hover:after {
        content: "${({name}) => name}";
        position: absolute;
        display: inline-block;
        padding: 5px 10px;
        background: black;
        border-radius: 5px;
        top: 5px;
        margin-left: 8px;
        font-size: 12px;
        box-shadow: 0px 0px 10px 0px #000000;
        color: white;
        font-weight: bold;
    }
    
    @media (max-width: 900px) {
        margin: 0 3px;
        
        &:hover:after {
            content: "";
        }
    }
`;

function AdditionalInfoLinks() {
    return (
        <Container>
            <Link name="github" href={AddionalInfo.Github} delay={0}>
                <GithubIcon size={36} />
            </Link>
            <Link name="linkedin" href={AddionalInfo.Linkedin} delay={1}>
                <LinkedinIcon size={32} />
            </Link>
            <Link name="resume" href={AddionalInfo.Resume} delay={2}>
                <ResumeIcon size={34} />
            </Link>
        </Container>
    )
}

export default AdditionalInfoLinks;
