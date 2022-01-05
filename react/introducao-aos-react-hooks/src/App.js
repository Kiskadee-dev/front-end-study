import { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';
import './App.css';
import narutoImg from './images/naruto.png';
import Quotes from './components/Quotes/Quotes';
import getQuote from './services/quoteService/quoteService';
import jutsoSound from './sounds/jutso.mp3';

const audio = new Audio(jutsoSound);

function App() {
  let isMounted = useRef(true);

  const [quoteState, setQuoteState] = useState(
    {
      quote: 'loading quote',
      speaker: 'loading speaker'
    });


  const onUpdate = async () => {
    const quote = await getQuote();
    if (isMounted.current){
      let promise = audio.play();
      if (promise){
        promise.catch( (e) => console.log(`Audio error: ${e}`));
      };
      setQuoteState(quote);
    };
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Container>
      <Quotes {...quoteState} onUpdate={onUpdate} />
      <NarutoImg src={narutoImg} alt="Naruto" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;



export default App;
