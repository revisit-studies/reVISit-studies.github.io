import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import ImageSwitcher from '../components/ImageSwitcher';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
        <ImageSwitcher 
          lightImageSrc={"img/logos/revisitLogoLong.svg"}
          darkImageSrc={"img/logos/revisitLogoLong-dark.svg"}
          className='homepage-logo'
        />
        
        {/* <img src="img/logos/revisitLogoLong.svg" style={{width:'60%'}}/> */}
        {/* <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons} style={{marginTop:"50px"}}>
        <Link
            className="button button--secondary button--lg"
            to="/about">
            About ReVISit 
          </Link>
          <Link
            className="button button--primary button--lg"
            style={{color:'white'}}
            to="/docs/introduction">
            Get Started 
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
