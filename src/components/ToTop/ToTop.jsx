import css from './ToTop.module.css';
export default function ToTop() {
  function handleScrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <button className={css['circle-ripple']} onClick={handleScrollTop}>
      <svg className="icon" width="16" height="16">
        <use href="/src/img/icons.svg#icon-scroll-up"></use>
      </svg>
    </button>
  );
}
