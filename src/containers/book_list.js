import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
  render (){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
  renderList(){
    return this.props.books.map((book)=>{
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick = { () => this.props.selectBook(book) }
          >
          {book.title}
        </li>
      )
    });
  }
}

function mapStateToProps(state) {
  //whatever is returned here will be props in BookList
  return {
    books: state.books
  };
}

//anything returned from this function will end up as a prop in the
//BookList container
function mapDispatchToProps(dispatch){
  //connects the selectBook function and passes it to the reducers
  //the keys are exposed as props
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//connect the function above to the component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
