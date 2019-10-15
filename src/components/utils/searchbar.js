import React, { Component } from 'react'

class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			book: ''
		}
	}

	handleSearch(e) {
		this.setState({ book: e.target.value })
	}

	handleGoClick() {
		if (!this.props) {
			//   this.props.actions.fetchBook(this.state)
		}
	}

	render() {
		return (
			<div className='searchbar-container'>
				<form onSubmit={e => e.preventDefault()}>
					<input
						type='text'
						size='45'
						placeholder='Search Library'
						onChange={this.handleSearch.bind(this)}
						value={this.state.book} />
					<button
						type='submit'
						onClick={this.handleGoClick.bind(this)}>
						Search
          </button>
				</form>
			</div>
		)
	}
}

export default SearchBar