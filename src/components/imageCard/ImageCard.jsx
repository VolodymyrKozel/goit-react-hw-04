import css from './ImageCard.module.css';

export default function ImageCard({ image }) {
  return (
    <div className={css.container}>
      <img
        className={css.img}
        src={image.urls.thumb}
        alt={image.alt_description}
      />
    </div>
  );
}
