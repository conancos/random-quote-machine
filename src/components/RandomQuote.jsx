import { useState, useEffect } from 'react';

const RandomQuote = ({ isNewColor}) => {
    const [quoteData, setQuoteData] = useState('');

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(res => res.json())
            .then(data => {
                const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)]
                setQuoteData(randomQuote); 
                console.log(randomQuote);
            })
    }, [isNewColor]);

    const { quote, author } = { ...quoteData };
        
    return (
        <section id="quote-and-author" aria-live="polite">
            { quote ? ( 
                <>
                    <p id="text" className="text-res">{quote}</p>
                    <p id="author" className="author-res">- {author}</p> 
                </> 
                ) : <p id="text" className="text-res">Loading...</p>
            }
        </section>    
    )
    

}

export default RandomQuote