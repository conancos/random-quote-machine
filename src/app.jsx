import React, { useState, useEffect } from 'react';
import { RandomColor } from './components/RandomColor';
import RandomQuote from './components/RandomQuote';
import SocialButtons from './components/SocialButtons';
import QuoteButton from './components/QuoteButton';
import FooterLink from './components/FooterLink';
import './app.css';

export default function App() {
  const [color, setColor] = useState('crimson');
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // función callback que retornará la quote y el author del hijo para pasarlo a la variable tweetUrl desde aquí(el padre)
  const handleNewQuote = ({ quote, author }) => {
    setQuote(quote); 
    setAuthor(author);
  };

  // función que inicia cambiando el color para desencadenar el cambio de la quote y author.
  const handleClickAction = () => {
    setColor(RandomColor());
  };

  useEffect(() => {
    const changeValue = (property, value) => {
      document.documentElement.style.setProperty(property, value);
    };
    changeValue('--current-color', color);
    changeValue('--current-color-shadow', color);

    const isDarkColor = ["blue", "mediumblue", "darkblue", "midnightblue", "black", "navy", "indigo", "maroon", "darkred", "darkslategray"].includes(color);
    changeValue('--current-bgcolor-dark', isDarkColor ? "var(--current-bgcolor-light)" : "#041c25");
    changeValue('--current-color-icons', isDarkColor ? "transparent" : "var(--current-color)");
      
  }, [color]);
  

  // URLs para compartir RandomQuote ("quote and author") en Twitter.
  const isBrave = navigator.brave || (navigator.userAgent.includes("Brave"));
  const tweetUrl = isBrave
  ? `https://twitter.com/intent/post?text=${encodeURIComponent(`#Quotes "${quote}" - ${author}`)}`
  : `https://twitter.com/intent/tweet?text=${encodeURIComponent(`#Quotes "${quote}" - ${author}`)}`;
  /* const url = window.location.href; */
  
  const referenceURL = "https://conancos.dev/portfolio"; // "window.location.href";

  // URLs para compartir RandomQuote ("quote and author") en LinkedIn.
  const linkedInUrl= `https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=${encodeURIComponent(`${referenceURL}`)}&text=${encodeURIComponent(`"${quote}" - ${author}`)}`;


  return (
    <main>
      <article id="quote-box">
        <RandomQuote isNewColor={color} onNewQuote={handleNewQuote} />
        <section id="buttons">
          <SocialButtons tweetUrl={tweetUrl} linkedInUrl={linkedInUrl} />
          <QuoteButton handleClickAction={handleClickAction} /> 
        </section>
      </article>
      <FooterLink />
    </main>
  );

};
