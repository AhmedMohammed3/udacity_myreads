import React from 'react';
import { Link } from 'react-router-dom';
import { CURRENTLY_READING, READ, WANT_TO_READ } from '../helpers/CONSTANTS';
import BookSection from './BookSection';

const HomePage = ({books, onMoveItem}) => (
	<div className='list-books'>
		<div className='list-books-title'>
			<h1>MyReads</h1>
		</div>
		<div className='list-books-content'>
			<div>
				<BookSection
					books={books.filter(
						book => book.bookShelf === CURRENTLY_READING
					)}
					sectionTitle='Currently Reading'
					onMoveItem={onMoveItem}
				/>
				<BookSection
					books={books.filter(
						book => book.bookShelf === WANT_TO_READ
					)}
					sectionTitle='Want to Read'
					onMoveItem={onMoveItem}
				/>
				<BookSection
					books={books.filter(book => book.bookShelf === READ)}
					sectionTitle='Read'
					onMoveItem={onMoveItem}
				/>
			</div>
		</div>
		<div className='open-search'>
			<Link to='/search'>Add a book</Link>
		</div>
	</div>
);

export default HomePage;
