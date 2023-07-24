import ArrowLeft from './../../assets/Arrow.svg';
import ArrowRight from './../../assets/ArrowRight.svg';
import styles from './Categories.module.scss';

function Categories() {
  return (
    <section>
      <div className={styles.categoriesNav}>
        <div className={styles.categoriesText}>
          <h1>Categories</h1>
          <p>
            Here are lots of interesting destinations to visit, but don’t be confused—they’re
            already grouped by category.
          </p>
        </div>
        <div className={styles.arrows}>
          <img src={ArrowLeft} alt='' />
          <img src={ArrowRight} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Categories;
