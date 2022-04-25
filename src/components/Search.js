import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI';
import BookItem from './BookItem';

class Search extends Component {
	state = {
		query: '',
		books: []
	};

	handleSearch = e => {
		const query = e.target.value;
		this.setState({ query });
		if (query) {
			this.setState({ query });
			search(query).then(fetchedBooks => {
				if (!fetchedBooks.error) {
					const books = fetchedBooks.map(book => {
						return {
							id: book.id,
							bookTitle: book.title || 'No title',
							bookAuthor:
								(book.authors && book.authors.length > 0 && book.authors[0]) ||
								'No author',
							bookImage: book.imageLinks && (book.imageLinks.thumbnail || ''),
							bookShelf: book.shelf
						};
					});
					this.setState({ books });
				} else {
					this.setState({ books: [] });
				}
			});
		} else {
			this.setState({ books: [] });
		}
	};
	render() {
		return (
			<div className='search-books'>
				<div className='search-books-bar'>
					<Link className='close-search' to='/'>
						Close
					</Link>
					<div className='search-books-input-wrapper'>
						<input
							type='text'
							placeholder='Search by title or author'
							value={this.state.query}
							onChange={this.handleSearch}
						/>
					</div>
				</div>
				<div className='search-books-results'>
					<ol className='books-grid'>
						{this.state.books.map(book => (
							<li key={book.id}>
								<BookItem
									book={book}
									onMoveItem={this.props.onMoveItem}
									isFromSearch={true}
								/>
							</li>
						))}
					</ol>
				</div>
			</div>
		);
	}
}

export default Search;
