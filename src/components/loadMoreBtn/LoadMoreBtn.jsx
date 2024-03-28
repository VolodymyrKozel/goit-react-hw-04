import css from './LoadMoreBtn.module.css';
Loader;
import useScrollOnRender from '../hooks/useScrollOnRender';
import Loader from '../Loader/Loader';
export default function LoadMoreBtn({ handleLoadMore, loading }) {
  let moreRef = useScrollOnRender();
  return (
    <button
      ref={moreRef}
      className={css.btn}
      type="button"
      onClick={handleLoadMore}>
      {!loading ? 'Load more' : <Loader width={20} height={20} />}
    </button>
  );
}
