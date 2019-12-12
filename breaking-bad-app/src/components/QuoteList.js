import React, {useState} from 'react';
import Quote from './Quote';
import { connect } from 'react-redux';

import { getQuotes, filterQuotes } from '../actions/quoteActions';

const QuoteList = props => {

  const [quoteNum, setQuoteNum] = useState('')
  const [filter, setFilter] = useState('')

  const handleChanges = e => {
    setQuoteNum(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.getQuotes(quoteNum)
    setQuoteNum('');
  }

  const handleFilterTerm = e => {
    setFilter(e.target.value)
  }

  const handleFilter = e => {
    e.preventDefault();
    props.filterQuotes(filter)
    setFilter('')
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
      {props.quotes.length > 0 && 
      <form onSubmit={handleFilter}>
        <input
          type='text'
          name='filter-term'
          placeholder='filter quotes by name'
          value={filter}
          onChange={handleFilterTerm}
        />
        <button>Filter!</button>
      </form>
      }
      <div className='quote-list'>
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
  {getQuotes, filterQuotes}
)(QuoteList);