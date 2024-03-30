import css from './LoadMoreBtn.module.css';
import Loader from '../Loader/Loader';
export default function LoadMoreBtn({ handleLoadMore, loading }) {
  return (
    <button className={css.btn} type="button" onClick={handleLoadMore}>
      {!loading ? 'Load more' : <Loader width={20} height={20} />}
    </button>
  );
}
