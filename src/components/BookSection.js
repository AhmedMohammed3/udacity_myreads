import React, { Component } from 'react';
import BookItem from './BookItem';

class BookSection extends Component {
	render() {
		return (
			<div className='bookshelf'>
				<h2 className='bookshelf-title'>{this.props.sectionTitle}</h2>
				<div className='bookshelf-books'>
					<ol className='books-grid'>
						{this.props.sectionBooks.map(book => (
							<li key={book.id}>
								<BookItem
									book={book}
									bookShelf={this.props.bookShelf}
									onMoveItem={this.props.onMoveItem}
								/>
							</li>
						))}
					</ol>
				</div>
			</div>
		);
	}
}

export default BookSection;
