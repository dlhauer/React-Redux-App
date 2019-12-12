import React, {useState} from 'react';
import Quote from './Quote';
import { connect } from 'react-redux';

import { getQuotes } from '../actions/quoteActions';

const QuoteList = props => {

  const [quoteNum, setQuoteNum] = useState('')

  const handleChanges = e => {
    setQuoteNum(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.getQuotes(quoteNum)
    setQuoteNum('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='quote-num'
          placeholder='How many quotes you want?'
          value={quoteNum} 
          onChange={handleChanges}
        />
        <button>Get 'em!</button>
      </form>
      <div className='quote-list'>
        {/* <h2>QuoteList</h2> */}
        {props.quotes.map( (quoteObj, index) => <Quote key={index} quoteObj={quoteObj}/>)}
      </div>
  </div>
  )
}
const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    isFetching: state.isFetching,
    error: state.error
  }
}
export default connect(
  mapStateToProps,
  {getQuotes}
)(QuoteList);