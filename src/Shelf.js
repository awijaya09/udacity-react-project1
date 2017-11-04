import React, { Component }from 'react'

class Shelf extends Component {
  render() {
    const { title, books, onUpdateShelf } = this.props
    return (
      <div>
        <h2 className="bookshelf-title">{ title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
           {books.map(book => (
             <li key={book.id}>
               <div className="book">
                 <div className="book-top">
                   {'imageLinks' in book ?
                     <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail})` }}></div>
                     : <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(http://via.placeholder.com/128x193?text=No%20Cover)` }}></div>
                   }
                   <div className="book-shelf-changer">
                      <select value={book.shelf} name={book.id} onChange={(event) => {
                       onUpdateShelf(book, event.target.value)
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
                 <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
               </div>
             </li>
           ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
