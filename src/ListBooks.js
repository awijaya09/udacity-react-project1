import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  state = {
    books:[]
  }

  getAllBooks() {
    BooksAPI.getAll().then(books => {
      console.log(books)
      this.setState({
        books: books,
      })
    })
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() =>
      this.getAllBooks()
    )
  }

  componentDidMount() {
    this.getAllBooks()
  }

  render() {
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf
                books={this.state.books}
                onUpdateShelf={this.updateBookShelf}
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
