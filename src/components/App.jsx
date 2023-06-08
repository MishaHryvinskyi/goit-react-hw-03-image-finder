import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';

class App extends Component {
  state = {
    images: [],
    loading: false,
    search: '',
    page: 1,
  };

  handleFormSubmit = search => {
    this.setState({ search, page: 1, images: [], loading: true }, () => {
      this.fetchImages();
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      loading: true,
    }), () => {
      this.fetchImages();
    });
  };

  fetchImages = () => {
    const { search, page } = this.state;

    fetch(
      `https://pixabay.com/api/?q=${search}&page=${page}&key=35643945-433c06e40cd86730ec72beccd&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          loading: false,
        }));
      })
      .catch(error => {
        console.log('Error fetching data:', error);
        this.setState({ loading: false });
      });
  };

  render() {
    const { images, loading } = this.state;
    const showLoadMoreButton = images.length > 0;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <Loader />}
        {images.length > 0 && <ImageGallery images={images} />}
        {showLoadMoreButton && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}

export default App;