import React, { useState, useEffect } from 'react';
import { RandomColor } from './components/RandomColor';
import RandomQuote from './components/RandomQuote';
import './app.css';
import X from "./assets/icons/x.svg";
import In from "./assets/icons/in.svg";

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
    if (["blue", "mediumblue", "darkblue", "midnightblue", "black", "navy", "indigo", "maroon"].includes(color)) {
      changeValue('--current-bgcolor-dark', 'ivory');
      changeValue('--current-color-icons', "transparent");
    } else {
      changeValue('--current-bgcolor-dark', '#041c25');
      changeValue('--current-color-icons', "var(--current-color)");
    }
  }, [color]);
  

  // URLs para compartir RandomQuote ("quote and author") en Twitter.
  const isBrave = navigator.brave || (navigator.userAgent.includes("Brave"));
  const tweetUrl = isBrave
  ? `https://twitter.com/intent/post?text=${encodeURIComponent(`#Quotes "${quote}" - ${author}`)}`
  : `https://twitter.com/intent/tweet?text=${encodeURIComponent(`#Quotes "${quote}" - ${author}`)}`;
  /* const url = window.location.href; */
  
  const referenceURL = "window.location.href"; // "https://conancos.dev/portfolio";

  // URLs para compartir RandomQuote ("quote and author") en LinkedIn.
  const linkedInUrl= `https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=${encodeURIComponent(`${referenceURL}`)}&text=${encodeURIComponent(`"${quote}" - ${author}`)}`;


  return (
    <main>
      <article id="quote-box">
        <RandomQuote isNewColor={color} onNewQuote={handleNewQuote} />
        <section id="buttons">
          <aside id="container-rrss">
            <a id="tweet-quote" className="tweet-quote tweet-quote-res" 
              aria-label="Tweet this quote" target="_blank" rel="noreferrer noopener" 
              href={tweetUrl} title="Tweet on X">
                <img src={X} alt="X" className="icons" />
            </a>
            <a id="linkedIn-quote" className="tweet-quote tweet-quote-res" rel="noreferrer noopener"
              aria-label="Share on LinkedIn" target="_blank" 
              href={linkedInUrl} title="Share on LinkedIn">
                <img src={In} alt="In" className="icons" />
            </a>
          </aside>
          <button id="new-quote" onClick={handleClickAction}>New quote</button>  
        </section>
      </article>
      <footer className="footer">
        <a href="https://conancos.dev/portfolio" 
          target="_blank" aria-label="make by..."
        >by conancos.dev
        </a>
      </footer>
    </main>
  );

};
