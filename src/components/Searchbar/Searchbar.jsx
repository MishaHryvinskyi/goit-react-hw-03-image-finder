import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
    Search,
    SearchForm,
    SearchFormBtn,
    SearchBtnLabel,
    SearchInput
 } from './Searchbar.styled';


export class Searchbar extends Component {
    state = {
        search: '',
    }

handleSearchChange = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase() });
}
handleSubmit = e => {
    e.preventDefault();
    const { search } = this.state;
    this.setState({ search: '' });
}

render() {
    const { search } = this.state;
    return (
        <Search>
            <SearchForm onSubmit={this.handleSubmit}>
                <SearchFormBtn type="submit">
                <span>Search</span>
                </SearchFormBtn>

                <SearchInput
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={search}
                onChange={this.handleSearchChange}
                />
            </SearchForm>
        </Search>
        )
    }
}