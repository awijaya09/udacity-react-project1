import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'

class SearchBooks extends Component {
  state = {
    query: '',
    books:[]
  }

  updateQuery = (query) => {
      this.setState({query: query.trim()})
  }

  findSavedBooks(books) {
    const savedBooks = books.map(book => {
      book.shelf = "none"
      this.props.booksSaved.forEach(bookSaved => {
        if (book.id === bookSaved.id) {
          book.shelf = bookSaved.shelf
        }
      })
      return book
    })
    this.setState({
      books: books,
    })
  }

  searchQuery = (event) => {
    if (event.key === 'Enter') {
      const term = event.target.value
      BooksAPI.search(term, 20).then((books) => {
        if (books.length > 0) {
          this.findSavedBooks(books)
        } else {
          this.setState({
            books:[],
            query:term
          })
        }
      })
    }
  }

  render() {

    const { updateBookShelf } = this.props
    const { query, books} = this.state
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
                onKeyPress={this.searchQuery}/>
            </div>
          </div>
          <div className="search-books-results">
           {books.length > 0 &&
              <Shelf
                title='Search Result'
                books={ books }
                onUpdateShelf={updateBookShelf}
              />
            }
          </div>
        </div>
      )
  }
}

export default SearchBooks;
