import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CURRENTLY_READING, READ, WANT_TO_READ } from '../helpers/Constants';
import BookSection from './BookSection';
class HomePage extends Component {
	render() {
		return (
			<div className='list-books'>
				<div className='list-books-title'>
					<h1>MyReads</h1>
				</div>
				<div className='list-books-content'>
					<div>
						<BookSection
							sectionBooks={this.props.books.filter(
								book => book.bookShelf === CURRENTLY_READING
							)}
							sectionTitle='Currently Reading'
							onMoveItem={this.props.onMoveItem}
						/>
						<BookSection
							sectionBooks={this.props.books.filter(
								book => book.bookShelf === WANT_TO_READ
							)}
							sectionTitle='Want to Read'
							onMoveItem={this.props.onMoveItem}
						/>
						<BookSection
							sectionBooks={this.props.books.filter(
								book => book.bookShelf === READ
							)}
							sectionTitle='Read'
							onMoveItem={this.props.onMoveItem}
						/>
					</div>
				</div>
				<div className='open-search'>
					<Link to='/search'>Add a book</Link>
				</div>
			</div>
		);
	}
}

export default HomePage;
