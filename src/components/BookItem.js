import React, { Component } from 'react';
import { get } from '../BooksAPI';
import {
	CURRENTLY_READING,
	READ,
	WANT_TO_READ,
	NONE
} from '../helpers/CONSTANTS';

class BookItem extends Component {
	state = {
		bookShelf: this.props.book.bookShelf || NONE
	};
	options = [
		{
			value: CURRENTLY_READING,
			text: 'Currently Reading'
		},
		{
			value: WANT_TO_READ,
			text: 'Want to Read'
		},
		{
			value: READ,
			text: 'Read'
		},
		{
			value: NONE,
			text: 'None'
		}
	];
	handleMoveItem = e => {
		let bookShelf = '';
		switch (e.target.options.selectedIndex) {
			case 1:
				bookShelf = CURRENTLY_READING;
				break;
			case 2:
				bookShelf = WANT_TO_READ;
				break;
			case 3:
				bookShelf = READ;
				break;
			default:
				bookShelf = NONE;
				break;
		}
		this.props.onMoveItem(bookShelf, this.props.book);
	};

	componentDidMount() {
		if (this.props.isFromSearch) {
			get(this.props.book.id).then(book => {
				this.setState({
					bookShelf: book.shelf
				});
			});
		}
	}

	render() {
		return (
			<div className='book'>
				<div className='book-top'>
					<div
						className='book-cover'
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url("${this.props.book.bookImage}")`
						}}
					/>
					<div className='book-shelf-changer'>
						<select value={this.state.bookShelf} onChange={this.handleMoveItem}>
							<option value='move' disabled>
								Move to...
							</option>
							{this.options.map(option => (
								<option key={option.value} value={option.value}>
									{option.text}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className='book-title'>{this.props.book.bookTitle}</div>
				<div className='book-authors'>
					{this.props.book.bookAuthor &&
						this.props.book.bookAuthor.length > 0 &&
						this.props.book.bookAuthor.map((author, idx) => (
							<div key={idx}>{author}</div>
						))}
				</div>
			</div>
		);
	}
}

export default BookItem;
