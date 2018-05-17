import React from 'react';
import PropTypes from 'prop-types';

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
      <div>{quote}</div>
    </div>
  )
}

export default Quote;