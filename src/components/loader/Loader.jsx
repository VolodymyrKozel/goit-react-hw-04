import css from './Loader.module.css';
import { DNA } from 'react-loader-spinner';

export default function Loader({ width = 180, height = 180 }) {
  return (
    <div className={css.wrapper}>
      <DNA
        visible={true}
        height={`${width}px`}
        width={`${height}px`}
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass={css.loader}
      />
    </div>
  );
}
