import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {

  render() {
    const { books, updateBookShelf } = this.props
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf
                books={books}
                onUpdateShelf={updateBookShelf}
              />
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Search</Link>
          </div>
        </div>
    )
  }
}

export default ListBooks;
