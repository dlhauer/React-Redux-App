import React from 'react';
import Quote from './Quote';
import { connect } from 'react-redux';

const QuoteList = props => {
  return (
    <div className='quote'>
      <h2>QuoteList</h2>
      {props.quotes.map( quoteObj => <Quote quoteObj={quoteObj}/>)}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    quotes: state
  }
}
export default connect(
  mapStateToProps,
  {}
)(QuoteList);