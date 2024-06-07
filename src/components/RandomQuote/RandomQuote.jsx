import React, { useState } from 'react'
import './RandomQuote.css'
import twitterX_icon from '../assets/twitter.png'
import refresh_icon from '../assets/refresh.png'

const RandomQuote = () => {
    let quotes = [];
    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }
    const [quote, setQuote] = useState({
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Johann Wolfgang von Goethe"
    });
    const randomQuote = () => {
        const selectQuote = quotes[Math.floor(Math.random() *quotes.length)]
        setQuote(selectQuote)
    }
    const twitterX = () =>{
        window.open(`https://x.com/intent/tweet?text=${quote.text} - ${quote.author.split(",")[0]}`)
    }
    loadQuotes();
  return (
    <div className='container'>
        <h1>Random Quote Generator</h1>
        <div className='line'></div>
      <div className='quote'>{quote.text}</div>
      <div>
        <div className='line'></div>
        <div className='bottom'>
            <div className='author'>- {quote.author.split(",")[0]}</div>
            <div className='icons'>
                <img src={refresh_icon} onClick={() => randomQuote()}/>
                <img src={twitterX_icon} onClick={() => twitterX()}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RandomQuote
