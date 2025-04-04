import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Source Available',
    Svg: require('@site/static/svg/BabbleFinalLogoNoBGOpenSourceSeafoam.svg').default,

    description: (
      <>
        Fully source available and free to use.
      </>
    ),
  },
  {
    title: 'Headset Agnostic',
    Svg: require('@site/static/svg/BabbleFinalLogoHeadsetAgnosticSeafoam.svg').default,
    description: (
      <>
        Babble works with nearly all VR headsets.
      </>
    ),
  },
  {
    title: 'Open Platform',
    Svg: require('@site/static/svg/network-transmit-receive-symbolicSeafoam.svg').default,
    description: (
      <>
        Open platform and accessible with any Social VR game via the Open Sound
        Control protocol. 
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
