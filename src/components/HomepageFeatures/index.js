import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Open Source',
    Svg: require('@site/static/svg/BabbleFinalLogoNoBG+OpenSourceBlack.svg').default,
    description: (
      <>
        Fully open source and free to use. 
      </>
    ),
  },
  {
    title: 'Headset Agnostic',
    Svg: require('@site/static/svg/BabbleFinalLogoHeadsetAgnostic.svg').default,
    description: (
      <>
        Babble works with nearly all VR headsets.
      </>
    ),
  },
  {
    title: 'Open Platform',
    Svg: require('@site/static/svg/network-transmit-receive-symbolic.svg').default,
    description: (
      <>
        Open platform and acces
        sible with any Social VR game via the Open Sound Control protocol. 
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
