
const initialState = [
  {
    quote: 'I am the Breaking Bad quote app.',
    author: 'Dan Hauer'
  },
  {
    quote: 'Do not mess with New Mexico',
    author: 'Walter White'
  }
];

const reducer = (state = initialState, action) => {
  switch(action.type) {
    default: 
      return state;
  }
}

export default reducer;