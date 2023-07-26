import styles from './CategoriesCard.module.scss';
// eslint-disable-next-line react/prop-types
const CategoriesCard = ({ title, img }) => {
  return (
    <div className={styles.categoriesCardWrapper}>
      <div className={styles.categoriesCard}>
        <img src={img} alt={title} />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default CategoriesCard;
