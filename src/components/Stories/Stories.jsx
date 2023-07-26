import StoriesCard from '../StoriesCard/StoriesCard';
import styles from './Stories.module.scss';

const Stories = () => {
  return (
    <section className={styles.storiesWrapper}>
      <div className={styles.storiesImg}></div>
      <div className={styles.storiesText}>
        <h2>Our Experience</h2>
        <h3>Our Stories Have Adventures</h3>
        <p>
          We are experienced in bringing adventures to stay their journey, with all outdoor
          destinations in the world as our specialties. Start your adventure now! Nature has already
          called you!
        </p>
        <div className={styles.cardWrapper}>
          <StoriesCard text={'Succes Journey'} count={'12K+'} />
          <StoriesCard text={'Awards Winning'} count={'16+'} />
          <StoriesCard text={'Years Of Experience'} count={'20+'} />
        </div>
      </div>
    </section>
  );
};

export default Stories;
