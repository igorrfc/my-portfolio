import React from 'react';
import styled, {keyframes} from 'styled-components';

// @ts-ignore
import trip from './assets/trip.mp4';
import Subtitles from './components/Subtitles';
import AdditionalInfoLinks from "./components/AdditionalInfoLinks";

const dotsAnimation = keyframes`
    0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  40% {
    color: #1eef18;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  60% {
    text-shadow:
      .25em 0 0 #1eef18,
      .5em 0 0 rgba(0,0,0,0);
  }
  80%, 100% {
    text-shadow:
      .25em 0 0 #1eef18,
      .5em 0 0 #1eef18;}
  }
`;

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

const Video = styled.video<{hidden: boolean}>`
    width: 600px;
    margin-top: 48px;
    height: 600px;
    
    ${({hidden}) => hidden ? "visibility: hidden" : "" }
    
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
    bottom: 8%;
    left: 0;
    width: 100%;
    padding: 0 5%;
    box-sizing: border-box;
    
    @media (max-width: 900px) {
        bottom: 15%;
    }
`;

const LinksContainer = styled.div`
    margin: 6% 0;
`;

const TerminalFont = styled.p`
    color: #1eef18;
  margin: 0;
`;

const TerminalDotsAnimation = styled(TerminalFont)`
  font-size: 30px;
  
  &:after {
      content: ' .';
      animation: ${dotsAnimation} 1s steps(5, end) infinite;
  }
`;

const TerminalArrow = styled(TerminalFont)`
    color: #1eef18;
    font-size: 20px;
    margin-right: 5px;
`;

const LoadingWrapper = styled.div`
    margin-top: 40px;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
`;

function LoadingTerminalAnimation() {
    return (
        <LoadingWrapper><TerminalArrow>➜</TerminalArrow><TerminalDotsAnimation /></LoadingWrapper>
    )
};

function App() {
    const videoRef = React.useRef(null);
    const [isLoadingVideo, toggleVideoLoading] = React.useState(true);
    const [isAdditionalInfoVisible, toggleAdditionalInfoVisibility] = React.useState(false);

    const finishLoadingVideo = React.useCallback(() => {
        toggleVideoLoading(false);

        (document.getElementById('trip-video') as HTMLVideoElement).play();
    }, []);

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
                {isLoadingVideo ? <LoadingTerminalAnimation /> : null}
                <Video id="trip-video" ref={videoRef} autoPlay playsInline muted loop onLoadedData={finishLoadingVideo} hidden={isLoadingVideo} preload="auto">
                    <source src={trip} type="video/mp4" />
                </Video>
            </VideoContainer>
            {isLoadingVideo ? null : (<SubtitlesContainer>
                <Subtitles showAdditionalInfo={showAdditionalInfo} />
            </SubtitlesContainer>)}
        </Container>
    );
}

export default App;
