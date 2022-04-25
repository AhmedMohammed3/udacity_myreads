import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import { getAll, update } from './BooksAPI';
import './App.css';
import HomePage from './components/HomePage';
import Search from './components/Search';

class BooksApp extends React.Component {
	state = {
		books: []
	};

	componentDidMount() {
		this.getAllBooks();
	}

	getAllBooks = () => {
		getAll().then(fetchedBooks => {
			const books = fetchedBooks.map(book => {
				return {
					id: book.id,
					bookTitle: book.title,
					bookAuthor: book.authors[0],
					bookImage: book.imageLinks.thumbnail,
					bookShelf: book.shelf
				};
			});
			this.setState({ books });
		});
	};
	handleMoveItem = (bookShelf, returnedBook) => {
		update(returnedBook, bookShelf);
		this.setState(prevState => {
			let newBooks;
			if (prevState.books.find(book => book.id === returnedBook.id)) {
				newBooks = prevState.books.map(book => {
					if (book.id === returnedBook.id) {
						book.bookShelf = bookShelf;
					}
					return book;
				});
			} else {
				newBooks = [...prevState.books, returnedBook];
			}
			return { books: newBooks };
		});
	};
	render() {
		return (
			<div className='app'>
				<Switch>
					<Route
						exact
						path='/'
						render={() => (
							<HomePage
								books={this.state.books}
								onMoveItem={this.handleMoveItem}
							/>
						)}
					/>
					<Route
						exact
						path='/search'
						render={() => <Search onMoveItem={this.handleMoveItem} />}
					/>
				</Switch>
			</div>
		);
	}
}

export default BooksApp;
