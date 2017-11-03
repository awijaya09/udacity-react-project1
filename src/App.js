import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
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
      <div className="app">
       <Route path='/search' render={() => (
         <SearchBooks
          updateBookShelf={this.updateBookShelf}
         />
       )}/>
       <Route path='/' exact={true} render={() => (
         <ListBooks
          books={this.state.books}
          updateBookShelf={this.updateBookShelf}
         />
       )}/>
      </div>
    )
  }
}

export default BooksApp
