// App.jsx
import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

class App extends Component {
  state = {
    images: [],
    loading: false,
    search: '',
  };

  handleFormSubmit = search => {
    this.setState({ search });
  };

  componentDidMount() {
    this.setState({ loading: true });

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      console.log('Змінилося');
      this.setState({ loading: true });
      
      fetch(
        `https://pixabay.com/api/?q=${this.state.search}&page=1&key=35643945-433c06e40cd86730ec72beccd&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ images: data.hits, loading: false });
        })
        .catch(error => {
          console.log('Error fetching data:', error);
        });
    }
  }

  render() {
    const { images, loading } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images.length > 0 && (
          <ul>
            {images.map(image => (
              <li key={image.id}>
                <img src={image.webformatURL} alt={image.tags} />
              </li>
            ))}
          </ul>
        )}
        {loading && <h1>Загружаємо...</h1>}
      </div>
    );
  }
}

export default App;