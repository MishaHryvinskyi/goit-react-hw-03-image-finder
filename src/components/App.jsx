import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    images: [],
    loading: false,
    search: '',
    page: 1,
    showModal: false, 
    selectedImage: null, 
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

  openModal = image => {
    this.setState({ showModal: true, selectedImage: image });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  render() {
    const { images, loading, showModal, selectedImage } = this.state;
    const showLoadMoreButton = images.length > 0;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} openModal={this.openModal} />
        )}
        {showLoadMoreButton && <Button onClick={this.handleLoadMore} />}
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;