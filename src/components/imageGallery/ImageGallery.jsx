import ImageCard from '../imageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, openModal, setCurrentImage }) {
  function handleOpenModal(image) {
    setCurrentImage(image);
    openModal();
  }
  return (
    <ul className={css.list}>
      {/* Набір елементів списку із зображеннями */}
      {images.map(image => {
        return (
          <li
            key={image.id}
            className={css.item}
            onClick={() => handleOpenModal(image)}>
            <ImageCard image={image} />
          </li>
        );
      })}
    </ul>
  );
}
