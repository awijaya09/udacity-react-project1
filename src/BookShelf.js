import React, { Component } from 'react'
import sortBy from 'sort-by'
import Shelf from './Shelf'

class BookShelf extends Component {

  render() {
    const {books, onUpdateShelf} = this.props

    if (books) {
      var currentlyReading = books.filter((book) => book.shelf === 'currentlyReading')
      currentlyReading.sort(sortBy('title'))

      var wantToRead =  books.filter((book) => book.shelf === 'wantToRead')
      wantToRead.sort(sortBy('title'))

      var read = books.filter((book) => book.shelf === 'read')
      read.sort(sortBy('title'))
    }

    return (
      <div className="bookshelf">
        <Shelf
          title='Currently Reading'
          books={ currentlyReading }
          onUpdateShelf={onUpdateShelf}
        />
        <Shelf
          title='Want to read'
          books={ wantToRead }
          onUpdateShelf={onUpdateShelf}
        />
        <Shelf
          title='Read'
          books={ read }
          onUpdateShelf={onUpdateShelf}
        />
      </div>
    )
  }
}

export default BookShelf;
