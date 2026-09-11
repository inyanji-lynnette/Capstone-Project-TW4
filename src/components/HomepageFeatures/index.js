import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Live Queue Tracking',
    Svg: require('@site/static/img/icon-clock.svg').default,
    description: (
      <>
        See your real-time position in line from anywhere. No more
        guessing how long the wait will be, or standing in a crowded
        waiting room to hold your spot.
      </>
    ),
  },
  {
    title: 'Smart Notifications',
    Svg: require('@site/static/img/icon-bell.svg').default,
    description: (
      <>
        Get notified as your turn approaches, so you can arrive right
        on time instead of arriving early and waiting around..
      </>
    ),
  },
  {
    title: 'Easy Rescheduling',
    Svg: require('@site/static/img/icon-calendar.svg').default,
    description: (
      <>
        Change or cancel your appointment in a few taps, without
        needing to call in or visit the facility in person. Our system will automatically update your position in line and notify you of any changes.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
