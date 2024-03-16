import css from './ImageModal.module.css';
import Modal from 'react-modal';

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
            <use href="/src/img/icons.svg#icon-menu-close"></use>
          </svg>
        </button>
        <img
          className={css.imgModal}
          src={currentImage.urls.full}
          alt={currentImage.alt_description}
        />
      </Modal>
    )
  );
}
