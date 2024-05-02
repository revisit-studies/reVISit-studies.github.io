import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Flexible And Powerful',
    Svg: require('@site/static/img/page-analysis.svg').default,
    description: (
      <>
        ReVISit is designed with researchers from all disciplines in mind. It is simple enough to allow study creators to stand up small questionnaires quickly but powerful enough for creators to implement interactive visualizations for more complex stimuli.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/cloud-acceleration.svg').default,
    description: (
      <>
        ReVISit allows researchers to focus on the visual stimuli without the hassle of setting up storage, capturing user events, and complicated randomization of studies. 
      </>
    ),
  },
  {
    title: 'In Depth Analysis',
    Svg: require('@site/static/img/data-analysis.svg').default,
    description: (
      <>
        With the Analysis Dashboard, you can investigate the results from your study with an easy-to-use UI or download the data directory for use in your analysis platform of choice.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
