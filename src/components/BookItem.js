import React, { Component } from 'react';
import {
	CURRENTLY_READING_ID,
	READ_ID,
	WANT_TO_READ_ID
} from '../helpers/CONSTANTS';

class BookItem extends Component {
	options = [
		{
			value: 'currentlyReading',
			text: 'Currently Reading',
			selected: this.props.sectionId === CURRENTLY_READING_ID
		},
		{
			value: 'wantToRead',
			text: 'Want to Read',
			selected: this.props.sectionId === WANT_TO_READ_ID
		},
		{
			value: 'read',
			text: 'Read',
			selected: this.props.sectionId === READ_ID
		},
		{
			value: 'none',
			text: 'None',
			selected:
				this.props.sectionId !== CURRENTLY_READING_ID &&
				this.props.sectionId !== WANT_TO_READ_ID &&
				this.props.sectionId !== READ_ID
		}
	];
	handleMoveItem = e => {
		this.props.onMoveItem(e.target.options.selectedIndex, this.props.book.id);
	};
	render() {
		let selectedValue = this.options[3].value;
		for (const option of this.options) {
			if (option.selected) {
				selectedValue = option.value;
				break;
			}
		}
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
						<select value={selectedValue} onChange={this.handleMoveItem}>
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
				<div className='book-authors'>{this.props.book.bookAuthor}</div>
			</div>
		);
	}
}

export default BookItem;
