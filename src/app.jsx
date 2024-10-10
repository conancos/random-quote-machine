import React from 'react'
import './app.css'

/* document.querySelector('html').removeAttribute('style'); */
export default function App() {
    
  return (
    <main>
      <article id="quote-box">
        <section id="quote-and-author" aria-live="polite">
          <p id="text" className="text-res">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, corporis.</p>
          <p id="author" className="author-res">-Joaquín Martínez</p>
        </section>
        <section id="buttons">
          {
            navigator.userAgent.browser !== 'Brave' ?
            <a id="tweet-quote" className="tweet-quote-res" aria-label="Tweet this quote" target="_blank" rel="noreferrer noopener" href="https://twitter.com/intent/tweet">Tweet</a>
            :
            <a id="go-to-twitter" className="go-to-twitter-res" aria-label="Go to Twitter" target="_blank" rel="noreferrer noopener" href="https://twitter.com">tweet on Twitter</a>
          }
          <button id="new-quote">New quote</button>  
        </section>
      </article>
    </main>
  )
}
/* 
href="https://twitter.com/intent/tweet ??
?hashtags=quotes&related=freecodecamp&text=prueba-de-tweet
*/