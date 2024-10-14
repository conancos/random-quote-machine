import React, { useState, useEffect } from 'react'
import { RandomColor } from './components/RandomColor'
import RandomQuote from './components/RandomQuote'
import './app.css'

export default function App() {
  const [color, setColor] = useState('crimson');

  const handleclick = () => {
    setColor(RandomColor());
  }
  
  useEffect(() => {
    document.documentElement.style.setProperty('--current-color', color);
    document.documentElement.style.setProperty('--current-color-shadow', color);
   
     (color === "blue" || color === "mediumblue" || color === "darkblue" || color === "midnightblue" || color === "black" || color === "navy" || color === "indigo" || color === "maroon") ?
      document.documentElement.style.setProperty('--current-bgcolor-dark', 'ivory') :
      document.documentElement.style.setProperty('--current-bgcolor-dark', '#041c25')
  }, [color]);
  

  return (
    <main>
      <article id="quote-box">
        <RandomQuote  isNewColor={color} />
        {/* <section id="quote-and-author" aria-live="polite">
          <p id="text" className="text-res">{quote}</p>
          <p id="author" className="author-res">- {author}</p>
        </section> */}
        <section id="buttons">
          {
            navigator.userAgent.browser !== 'Brave' ?
            <a id="tweet-quote" className="tweet-quote-res" aria-label="Tweet this quote" target="_blank" rel="noreferrer noopener" href="https://twitter.com/intent/tweet">Tweet</a>
            :
            <a id="go-to-twitter" className="go-to-twitter-res" aria-label="Go to Twitter" target="_blank" rel="noreferrer noopener" href="https://twitter.com">tweet on Twitter</a>
          }
          <button id="new-quote" onClick={handleclick}>New quote</button>  
        </section>
      </article>
    </main>
  )
}
/* 
href="https://twitter.com/intent/tweet ??
?hashtags=quotes&related=freecodecamp&text=prueba-de-tweet
*/