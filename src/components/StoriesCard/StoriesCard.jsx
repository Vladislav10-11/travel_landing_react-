import styles from './StoriesCard.module.scss';

// eslint-disable-next-line react/prop-types
const StoriesCard = ({ count, text }) => {
  return (
    <div className={styles.card}>
      <h4>{count}</h4>
      <p>{text}</p>
    </div>
  );
};

export default StoriesCard;
