import React from 'react';

const Quote = ({getQuote, quote}) => {
  return (
    <div>
      <h1>Quote of the day</h1>
      <button
        type="button"
        className="quote-submit"
        onClick={getQuote}
      >
        Get Quote
      </button>
      <div>{quote.quote}</div>
      <div>{quote.author}</div>
    </div>
  )
}

export default Quote;