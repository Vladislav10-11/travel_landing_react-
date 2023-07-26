import styles from './Popular.module.scss';
import ArrowLeft from './../../assets/Arrow.svg';
import ArrowRight from './../../assets/ArrowRight.svg';
import PopularCard from '../PopularCard/PopularCard';

const popularCards = [
  {
    title: 'Mountain Hiking Tour',
    subtitle: 'Mountain Hiking Tour',
    cost: '$89',
  },
  {
    title: 'Machu Picchu, Peru',
    subtitle: 'Mountain Hiking Tour',
    cost: '$99',
  },
  {
    title: 'The Grand Canyon, Arizona',
    subtitle: 'Mountain Hiking Tour',
    cost: '$70',
  },
];

const Popular = () => {
  return (
    <section className={styles.section}>
      <div className={styles.navWrapper}>
        <h2>Find Popular Destination</h2>
        <div className={styles.arrows}>
          <img src={ArrowLeft} alt='' />
          <img src={ArrowRight} alt='' />
        </div>
      </div>
      <div className={styles.cards}>
        {popularCards.map((item) => (
          <PopularCard
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            cost={item.cost}
          />
        ))}
      </div>
    </section>
  );
};

export default Popular;
