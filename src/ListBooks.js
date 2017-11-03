import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  state = {
    currentlyReading: [],
    wantToRead:[],
    read:[]
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log(books)
      this.setState({
        currentlyReading: books.filter((book) => book.shelf === 'currentlyReading'),
        wantToRead: books.filter((book) => book.shelf === 'wantToRead'),
        read: books.filter((book) => book.shelf === 'read')
      })
    })
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
                currentlyReading={this.state.currentlyReading}
                wantToRead={this.state.wantToRead}
                read={this.state.read}/>
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
