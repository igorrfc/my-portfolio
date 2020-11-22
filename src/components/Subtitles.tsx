import React from 'react';
import styled from "styled-components";

const noop = () => {};

const SubtitleText = styled.p`
    font-family: sans-serif;
    font-weight: bold;
    font-size: 4vmin;
    line-height: 1.2;
    letter-spacing: 1.1px;
    text-align: center;
    color: rgba(244,244,100,1);
    text-shadow: 0 0 .2em rgba(0,0,0,.5);
    width: 100%;
`;

function Subtitles({showAdditionalInfo}: {showAdditionalInfo: () => void}) {
    const [subtitles] = React.useState([
        {text: 'Hello there!', duration: 4000, onStart: noop},
        {text: "I'm glad you sat next to me", duration: 5000, onStart: noop},
        {text: 'My name is Igor Fernandes, I have been writing software for 6 years now', duration: 6000, onStart: noop},
        {text: "I guess you heard something about that and that's why you are here, right?", duration: 8000, onStart: noop},
        {text: 'But I\'ll ask you to forget the regular "show my past experiences" stuff, I wanted to share why I\'ve been doing what I do with you, during this few seconds of trip', duration: 10000, onStart: noop},
        {text: "Here are some links where you can find more information about my work experience and a few samples of my code. Feel free to leave the trip and check them right now (but you can do that later).", duration: 12000, onStart: showAdditionalInfo},
        {text: 'Anyway, why am I a developer?', duration: 5000, onStart: noop},
        {text: "Software development is the way I found to express my singularities in a creative way, and I truly believe that's the most accurate way to do it which I've discovered so far.", duration: 10000, onStart: noop},
        {text: "While I'm trying to create that animation which will make the user take the most from that feature, or while I'm helping to shape that challenging project architecture…", duration: 10000, onStart: noop},
        {text: "or while I'm immersed in that chain of thoughts, shaping a new feature in my head which will make the product useful in a unique way…", duration: 10000, onStart: noop},
        {text: "Believe me, I feel amazing!", duration: 5000, onStart: noop},
        {text: "It's like I'm an artist leaving a timeless masterpiece to the world…", duration: 6000, onStart: noop},
        {text: "There are no limits for what I can create and that is fantastic!", duration: 6000, onStart: noop},
        {text: 'Do you also think the world would be a better place if everyone looked at their job this way?', duration: 7000, onStart: noop},
        {text: "Oh, sorry! I'm talking too much…", duration: 5000, onStart: noop},
        {text: "Now it's your turn. Do you have something to share with me?", duration: 7000, onStart: noop},
        {text: "I'm all ears (on my linkedin).", duration: 7000, onStart: noop},
        {text: "While you think, enjoy the trip. What a nice view we have here, right?", duration: 7000, onStart: noop},
    ]);
    const [currentSubtitleIndex, setSubtitleIndex] = React.useState(0);

    React.useEffect(() => {
        const subtitleConfig = subtitles[currentSubtitleIndex];

        if (currentSubtitleIndex < subtitles.length - 1) {
            subtitleConfig.onStart();
            setTimeout(() => {
                setSubtitleIndex(currentSubtitleIndex + 1)
            }, subtitleConfig.duration);
        }
    }, [subtitles, currentSubtitleIndex]);

    return (
        <SubtitleText>- {subtitles[currentSubtitleIndex]?.text}</SubtitleText>
    )
}

export default Subtitles;
