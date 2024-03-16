import { useEffect, useState } from 'react';
import getImagesAPI from './components/GetImagesAPI';
import SearchBar from './components/SearchBar/SearchBar';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ToTop from './components/ToTop/ToTop';

import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [toTop, setToTop] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({});
  const [totalPages, setTotalPages] = useState(1);
  const [paramsRequest, setParamRequest] = useState({
    query: '',
    page: 1,
    perPage: 10,
    client_id: '5oq-O0l79UtWEfgesuk7FNxEhMjgmglWAfYeOAPGJFs',
  });
  function scrollBehavior() {
    scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  const handleSearch = ({ query, perPage = 10, order }) => {
    setImages([]);
    setParamRequest(prevParams => ({
      ...prevParams,
      query: query,
      per_page: perPage,
      page: 1,
      order_by: order,
    }));
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setToTop(true) : setToTop(false);
    });
  }, []);

  useEffect(() => {
    if (paramsRequest.query === '') return; // prevent fetch on mount
    fetchImages();
  }, [paramsRequest]);

  const fetchImages = async () => {
    try {
      setError(null);
      setLoading(true);
      const { data } = await getImagesAPI(paramsRequest);
      setTotalPages(data.total_pages);
      paramsRequest.page === 1
        ? setImages(data.results)
        : setImages(pImg => [...pImg, ...data.results]);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const handleLoadMore = () => {
    setParamRequest(prevParams => ({
      ...prevParams,
      page: prevParams.page + 1,
    }));
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage error={error} />}
      {images.length > 0 && (
        <ImageGallery
          images={images}
          openModal={openModal}
          setCurrentImage={setCurrentImage}
        />
      )}
      {loading && <Loader />}

      {totalPages > 1 && paramsRequest.page < totalPages ? (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      ) : null}
      <ImageModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        currentImage={currentImage}
      />
      {toTop && <ToTop />}
    </div>
  );
}

export default App;
