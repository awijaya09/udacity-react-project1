import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  state = {
    query: '',
    books:[]
  }

  updateQuery = (query) => {
      this.setState({query: query.trim()})
  }

  searchQuery = (event) => {
    if (event.key === 'Enter') {
      const term = event.target.value.trim()
      BooksAPI.search(term, 20).then((books) => {
        console.log(books);
        this.setState({
          books: books,
          query: term
        })
      })
    }
  }

  render() {
      const { updateBookShelf } = this.props
      const { query, books } = this.state

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
            <ol className="books-grid">
              {books.map(book => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select value="none" name={book.id} onChange={(event) => {
                          updateBookShelf(book, event.target.value)
                        }}>
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors ? book.authors.map(author => author !== book.authors[book.authors.length-1] ? author + ', ' : author) : null}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )
  }
}

export default SearchBooks;
