import React from 'react';
import styled from 'styled-components';

// @ts-ignore
import trip from './assets/trip.mp4';
import Subtitles from './components/Subtitles';
import AdditionalInfoLinks from "./components/AdditionalInfoLinks";

const VideoContainer = styled.div`
    background-color: black;
    width: 600px;
    height: 648px;
    overflow: hidden;
    box-shadow: 0px 0px 10px 0px #000000;
    
    @media (max-width: 900px) {
        width: 300px;
        height: 348px;
    }
`;

const Video = styled.video`
    width: 600px;
    margin-top: 48px;
    height: 600px;
    
    @media (max-width: 900px) {
        width: 300px;
        height: 300px;
    }
`;

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1d2021;
    position: relative;
    overflow: hidden
`;

const ProfileInfo = styled.div`
    position: absolute;
   top: 20px;
   left: 20px;
   letter-spacing: 1.5px;
   
   @media (max-width: 900px) {
        left: 0;
        width: 100%;
        text-align: center;
    }
`;

const ProfileText = styled.p`
    font-family: 'Bebas Neue', cursive;
    color: white;
    margin: 0;
`

const Name = styled(ProfileText)`
    font-size: 20px;
`;

const Role = styled(ProfileText)`
    font-size: 12px;
    color: #a7a5a5;
    text-align: center;
`;

const SubtitlesContainer = styled.div`
     position: absolute;
    bottom: 30px;
    left: 0;
    width: 100%;
    padding: 0 5%;
    box-sizing: border-box;
`;

const LinksContainer = styled.div`
    margin: 6% 0;
`;

function App() {
    const [isAdditionalInfoVisible, toggleAdditionalInfoVisibility] = React.useState(false);

    const showAdditionalInfo = React.useCallback(() => {
        setTimeout(() => {
            toggleAdditionalInfoVisibility(true);
        }, 2000)
    }, []);

    return (
        <Container>
            <ProfileInfo>
                <Name>igor fernandes</Name>
                <Role>software engineer</Role>
                {isAdditionalInfoVisible ? (<LinksContainer>
                    <AdditionalInfoLinks />
                </LinksContainer>) : null}
            </ProfileInfo>
            <VideoContainer className="mac">
                <Video autoPlay playsInline muted loop src={trip} />
            </VideoContainer>
            <SubtitlesContainer>
                <Subtitles showAdditionalInfo={showAdditionalInfo} />
            </SubtitlesContainer>
        </Container>
    );
}

export default App;
