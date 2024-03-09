import css from './ImageModal.module.css';
import Modal from 'react-modal';

const customStyles = {
  content: {
    margin: 'auto',
    width: 'auto',
    'max-width': '700px',
  },
};
Modal.setAppElement('#root');
export default function ImageModal({ closeModal, modalIsOpen, currentImage }) {
  return (
    currentImage.urls && (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          /*    style={customStyles} */
          contentLabel="Full image">
          <button className={css.btn} onClick={closeModal}>
            <svg className="icon-close" width="16" height="16">
              <use href="/src/img/icons.svg#icon-menu-close"></use>
            </svg>
          </button>
          <img
            className={css.imgModal}
            src={currentImage.urls.full}
            alt={currentImage.alt_description}
          />
        </Modal>
      </div>
    )
  );
}
