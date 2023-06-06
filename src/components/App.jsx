import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ToastContainer, toast } from "react-toastify";

 class  App extends Component {
state= {
  images: [],
  loading: false,
  search: '',
};

handleFormSubmit = search => {
  this.setState({ search });
}

  componentDidMount() {
    this.setState({ loading: true });
    
    setTimeout(() => {
      fetch("https://pixabay.com/api/?q=cat&page=1&key=35643945-433c06e40cd86730ec72beccd&image_type=photo&orientation=horizontal&per_page=12")
    .then((res) => res.json())
      .then((data) => {
        this.setState({ images: data.hits, loading: false });
      })
      .finally(this.setState({ loading: false }))
      .catch((error) => {
        console.log("Error fetching data:", error);
      })
    }, 1000)
  }

  render() {
    const { images, loading } = this.state;
    
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}/>
       {images.length > 0 && (
          <ul className="gallery">
            {images.map((image) => (
              <li key={image.id} className="gallery-item">
                <img src={image.webformatURL} alt={image.tags} />
              </li>
            ))}
          </ul>
        )}
        {loading && <h1>Загружаємо...</h1>}
        <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
      </div>
    );
  }
};


export default App;