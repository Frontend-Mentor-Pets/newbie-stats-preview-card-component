import styles from './Card.module.scss';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.img}></div>
        <div className={styles.color}></div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Get <span>insights</span> that help your business grow.
        </h1>
        <p className={styles.subtitle}>
          Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and
          overall efficiency.
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <p className={styles.value}>10k+</p>
            <p className={styles.name}>companies</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.value}>314</p>
            <p className={styles.name}>templates</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.value}>12M+</p>
            <p className={styles.name}>queries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
