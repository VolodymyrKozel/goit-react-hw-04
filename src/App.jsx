import { useEffect, useState } from 'react';
import getImagesAPI from './components/GetImagesAPI';
import SearchBar from './components/searchBar/SearchBar';
import ErrorMessage from './components/errorMessage/ErrorMessage';
import Loader from './components/loader/Loader';
import ImageGallery from './components/imageGallery/ImageGallery';

import './App.css';
import ImageModal from './components/imageModal/ImageModal';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({});

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleSearch = async topic => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const { data } = await getImagesAPI(topic);
      console.log(data);
      setImages(data.results);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery
          images={images}
          openModal={openModal}
          setCurrentImage={setCurrentImage}
        />
      )}
      <ImageModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        currentImage={currentImage}
      />
    </div>
  );
}

export default App;
