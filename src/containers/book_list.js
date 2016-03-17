import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        <li key={book.title} className="list-group-item">{book.title}</li>
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

//connect the function above to the component
export default connect(mapStateToProps)(BookList);
