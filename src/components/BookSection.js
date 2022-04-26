import React from 'react';
import BookItem from './BookItem';

const BookSection = ({ books, onMoveItem, bookShelf, sectionTitle }) => (
	<div className='bookshelf'>
		<h2 className='bookshelf-title'>{sectionTitle}</h2>
		<div className='bookshelf-books'>
			<ol className='books-grid'>
				{books.map(book => (
					<li key={book.id}>
						<BookItem
							book={book}
							bookShelf={bookShelf}
							onMoveItem={onMoveItem}
						/>
					</li>
				))}
			</ol>
		</div>
	</div>
);
export default BookSection;
