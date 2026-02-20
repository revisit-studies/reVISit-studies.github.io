import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Papa from 'papaparse';
import styles from './adoption.module.css';

interface Adoption {
  title: string;
  authors: string;
  year: string;
  paperUrl: string;
  revisitStudyUrl?: string;
  subtitle: string;
  sourceCodeLink?: string;
  revisitVersion: string;
  published: boolean;
  venue: string;
  doi?: string;
}

function Adoption({ adoption }: { adoption: Adoption }) {
  const normalizedDoi = adoption.doi?.trim();
  const doiHref = normalizedDoi
    ? (normalizedDoi.startsWith('http') ? normalizedDoi : `https://dx.doi.org/${normalizedDoi.replace(/^doi:\s*/i, '')}`)
    : undefined;

  return (
    <div className={styles.adoptionContainer}>
      <div className={styles.title}>
        {adoption.title}
      </div>
      <div className={styles.authors}>
        {adoption.authors}
        .
        {' '}
        {adoption.venue !== '' ? adoption.venue : 'Preprint'}
        {doiHref ? (
          <>
            {', '}
            <Link href={doiHref} target="_blank" rel="noreferrer">
              DOI:
              {' '}
              {normalizedDoi}
            </Link>
          </>
        ) : null}
        {`, ${adoption.year}`}
      </div>
      <p className={styles.description}>
        {adoption.subtitle}
      </p>
      <div className={styles.buttonContainer}>
        <div className={styles.primaryButtons}>
          {adoption.revisitStudyUrl ? (
            <Link
              className={clsx('button button--primary', styles.buttonDesktop)}
              style={{ color: 'white' }}
              to={adoption.revisitStudyUrl}
            >
              See ReVISit Study
            </Link>
          ) : null}
          {adoption.paperUrl === '#' ? null
            : (
              <Link
                className={clsx('button button--secondary', styles.buttonDesktop)}
                to={adoption.paperUrl}
              >
                See the paper
              </Link>
            )}
          {adoption.revisitStudyUrl ? (
            <Link
              className={clsx('button button--primary button--sm', styles.buttonMobile)}
              style={{ color: 'white' }}
              to={adoption.revisitStudyUrl}
            >
              See ReVISit Study
            </Link>
          ) : null}
          {adoption.paperUrl === '#' ? null
            : (
              <Link
                className={clsx('button button--secondary button--sm', styles.buttonMobile)}
                to={adoption.paperUrl}
              >
                See the paper
              </Link>
            )}
        </div>
        <div className={styles.secondaryButtons}>
          {adoption.sourceCodeLink ? (
            <Link href={adoption.sourceCodeLink}>
              <span>Source Code</span>
              <FontAwesomeIcon icon={faExternalLink} />
            </Link>
          )
            : null}
          <span>
            Uses ReVISit v
            {adoption.revisitVersion}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const [adoption, setAdoption] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/adoption.csv');
      if (!response.ok) {
        console.error('Error fetching the CSV file:', response.statusText);
        return;
      }
      const text = await response.text();
      Papa.parse(text, {
        header: true,
        complete: (results) => {
          const parsedAdoption = results.data.map((entry) => ({
            title: entry['Paper Title'],
            authors: entry['List of Authors'],
            year: entry['Year of Publication'],
            revisitStudyUrl: entry['Study URL'],
            paperUrl: entry['Paper URL'],
            subtitle: entry['Short Description'],
            revisitVersion: entry['ReVISit Version'],
            sourceCodeLink: entry['Source Code Link'],
            published: entry['Has this paper been published?'] === 'Yes',
            venue: entry['Journal, Conference or Veune'],
            doi: entry.DOI,
          }));
          // Sort based on Published then year (descending year).
          parsedAdoption.sort((a: Adoption, b: Adoption) => {
            if (a.published !== b.published) {
              return a.published ? -1 : 1;
            }

            return Number(b.year) - Number(a.year);
          });
          setAdoption(parsedAdoption);
        },
      });
    };

    fetchData();
  }, []);

  return (
    <Layout description={`${siteConfig.tagline}`}>
      <main className="container container--fluid margin-vert--lg">
        <div className="row">
          <div className="col col--10">
            <Heading as="h1" className={styles.pageTitle}>Studies Using reVISit</Heading>
            <div className={styles.pageIntro}>
              Many people have already gotten started using reVISit in their data visualization research. Check out all the different ways people are using reVISit to produce novel research. If you&apos;ve used reVISit as part of your research, we strongly encourage you to fill out
              {' '}
              <Link href="https://forms.gle/CE82n3V1bcmZ4ahY9" target="_blank" rel="noreferrer">this Google form</Link>
              . Once we verify your work, your research will be added to the list of papers using reVISit below.
            </div>
            {adoption.map((adoption: Adoption, index: number) => <Adoption key={index} adoption={adoption} />)}
          </div>
        </div>
      </main>
    </Layout>
  );
}
