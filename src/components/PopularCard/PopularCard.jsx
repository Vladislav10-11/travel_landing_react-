import styles from './PopularCard.module.scss';

// eslint-disable-next-line react/prop-types
const PopularCard = ({ title, subtitle, cost }) => {
  return (
    <div className={styles.card}>
      <img src='/src/assets/mountain.png' alt='' />
      <h4>{title}</h4>
      <p>{subtitle}</p>
      <div className={styles.cardInfo}>
        <p>
          {cost}
          <span>/Person</span>
        </p>
        <button className={styles.button}>Book Now</button>
      </div>
    </div>
  );
};

export default PopularCard;
