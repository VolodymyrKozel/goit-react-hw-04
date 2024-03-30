import { useEffect, useState } from 'react';
import getImagesAPI from './components/GetImagesAPI';
import SearchBar from './components/searchBar/SearchBar';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ToTop from './components/ToTop/ToTop';

import './App.css';

function App() {
  const [images, setImages] = useState(null);
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

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  const handleSearch = ({ query }) => {
    setParamRequest(prevParams => ({
      ...prevParams,
      query: query,
      page: 1,
    }));
  };
  function handleScrollUp() {
    window.scrollY > 80 ? setToTop(true) : setToTop(false);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScrollUp);
    return () => {
      window.removeEventListener('scroll', handleScrollUp);
    };
  }, [top]);

  useEffect(() => {
    if (paramsRequest.query === '') return; // prevent fetch on mount
    fetchImages();
  }, [paramsRequest.page, paramsRequest.query]);

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
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  function handleOpenModal(image) {
    setCurrentImage(image);
    openModal();
  }
  function handleLoadMore() {
    setParamRequest(prevParams => ({
      ...prevParams,
      page: prevParams.page + 1,
    }));
  }
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage error={error} />}
      {images && (
        <ImageGallery handleOpenModal={handleOpenModal} images={images} />
      )}
      {loading && paramsRequest.page === 1 && <Loader />}
      {totalPages > 1 && paramsRequest.page < totalPages ? (
        <LoadMoreBtn handleLoadMore={handleLoadMore} loading={loading} />
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
