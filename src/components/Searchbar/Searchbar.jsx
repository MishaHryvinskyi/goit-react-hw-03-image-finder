import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { 
    Search,
    SearchForm,
    SearchFormBtn,
    SearchInput
 } from './Searchbar.styled';
 import { FcSearch } from 'react-icons/fc';


export class Searchbar extends Component {
    state = {
        search: '',
    }

handleSearchChange = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase() });
}
handleSubmit = e => {
    e.preventDefault();
    
    if(this.state.search.trim() === '') {
        return toast.error('🦄 Wow so easy!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
}

render() {
    const { search } = this.state;
    return (
        <Search>
            <SearchForm onSubmit={this.handleSubmit}>
                <SearchFormBtn type="submit">
                <FcSearch size="24"/>
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

