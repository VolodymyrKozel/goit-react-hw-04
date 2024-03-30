import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, handleOpenModal }) {
  return (
    <div className="container">
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
    </div>
  );
}
