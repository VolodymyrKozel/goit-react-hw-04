import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');
export default function ImageModal({ closeModal, modalIsOpen, currentImage }) {
  return (
    currentImage.urls && (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal2"
        overlayClassName="Overlay2"
        contentLabel="Full image">
        <button className={css.btn} onClick={closeModal}>
          <svg className="icon-close" width="20" height="20">
            <use href="/icons.svg#icon-menu-close"></use>
          </svg>
        </button>

        <img
          className={css.imgModal}
          src={currentImage.urls.regular}
          alt={currentImage.alt_description}
        />
      </Modal>
    )
  );
}
