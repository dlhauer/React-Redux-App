import React from 'react';
import Quote from './Quote';
import { connect } from 'react-redux';

import { getQuotes } from '../actions/quoteActions';

const QuoteList = props => {
  // console.log(getQuotes());
  return (
    <div>
      <button
        onClick={ () => props.getQuotes()}
      >
        Get some Breaking Bad Quotes!
      </button>
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