import clsx from "clsx";
import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import EditThisPage from "@theme/EditThisPage";

import { VegaEmbed } from "react-vega";

import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import adoptionData from "../../data/adoption.generated.json";
import styles from "./adoption.module.css";

interface Adoption {
  title: string;
  authors: string;
  year: string;
  paperUrl: string;
  revisitStudyUrl?: string;
  abstract: string;
  sourceCodeLink?: string;
  revisitVersion: string;
  venue: string;
  doi?: string;
}

function Adoption({ adoption }: { adoption: Adoption }) {
  const studyUrls = adoption.revisitStudyUrl
    ? adoption.revisitStudyUrl
        .split("|")
        .map((u) => u.trim())
        .filter(Boolean)
    : [];
  const multipleStudies = studyUrls.length > 1;
  const normalizedDoi = adoption.doi?.trim();
  const doiHref = normalizedDoi
    ? normalizedDoi.startsWith("http")
      ? normalizedDoi
      : `https://dx.doi.org/${normalizedDoi.replace(/^doi:\s*/i, "")}`
    : undefined;
  const effectivePaperUrl =
    adoption.paperUrl && adoption.paperUrl !== "#"
      ? adoption.paperUrl
      : (doiHref ?? null);

  return (
    <div className={styles.adoptionContainer}>
      <div className={styles.title}>{adoption.title}</div>
      <div className={styles.authors}>
        {adoption.authors}.{" "}
        {adoption.venue !== "" ? adoption.venue : "Preprint"}
        {doiHref ? (
          <>
            {", "}
            <Link href={doiHref} target="_blank" rel="noreferrer">
              DOI: {normalizedDoi}
            </Link>
          </>
        ) : null}
        {`, ${adoption.year}`}
      </div>
      <p className={styles.description}>{adoption.abstract}</p>
      <div className={styles.buttonContainer}>
        <div className={styles.primaryButtons}>
          {studyUrls.map((url, i) => (
            <Link
              key={url}
              className={clsx("button button--primary", styles.buttonDesktop)}
              style={{ color: "white" }}
              to={url}
            >
              {multipleStudies ? `See Study ${i + 1}` : "See Study"}
            </Link>
          ))}
          {effectivePaperUrl ? (
            <Link
              className={clsx("button button--secondary", styles.buttonDesktop)}
              to={effectivePaperUrl}
            >
              See Paper
            </Link>
          ) : null}
          {studyUrls.map((url, i) => (
            <Link
              key={url}
              className={clsx(
                "button button--primary button--sm",
                styles.buttonMobile,
              )}
              style={{ color: "white" }}
              to={url}
            >
              {multipleStudies ? `See Study ${i + 1}` : "See Study"}
            </Link>
          ))}
          {effectivePaperUrl ? (
            <Link
              className={clsx(
                "button button--secondary button--sm",
                styles.buttonMobile,
              )}
              to={effectivePaperUrl}
            >
              See Paper
            </Link>
          ) : null}
        </div>
        <div className={styles.secondaryButtons}>
          {adoption.sourceCodeLink ? (
            <Link href={adoption.sourceCodeLink}>
              <span>Source Code</span>
              <FontAwesomeIcon icon={faExternalLink} />
            </Link>
          ) : null}
          {adoption.revisitVersion?.trim() ? (
            <span>Uses reVISit v{adoption.revisitVersion}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function AdoptionChart(props: { data: Adoption[] }) {
  const { data } = props;
  const values = data.map((x) => ({ year: +x.year }));
  return (
    <VegaEmbed
      options={{ actions: false, renderer: "svg" }}
      spec={JSON.parse(
        JSON.stringify({
          $schema: "https://vega.github.io/schema/vega-lite/v6.json",
          width: 340,
          title: {
            text: "Number of reVISit Studies Per Year",
            anchor: "start",
            fontSize: 14,
            offset: 16,
          },
          height: {
            step: 28,
          },
          view: {
            stroke: null,
          },
          data: { values },
          encoding: {
            y: {
              field: "year",
              type: "nominal",
              axis: {
                title: null,
                ticks: false,
                domain: false,
                labelPadding: 12,
              },
              scale: { reverse: true },
            },
            x: {
              aggregate: "count",
              type: "quantitative",
              axis: {
                title: null,
                labels: false,
                ticks: false,
                grid: false,
                domain: false,
              },
            },
          },
          layer: [
            { mark: { type: "bar", color: "#f05a30" } },
            {
              mark: { type: "text", dx: 8, color: "black" },
              encoding: {
                text: { aggregate: "count", type: "quantitative" },
              },
            },
          ],
          config: {
            text: { fontSize: 14 },
            axis: {
              labelFontSize: 14,
              titleFontSize: 14,
            },
            legend: {
              labelFontSize: 14,
              titleFontSize: 14,
            },
            header: {
              labelFontSize: 14,
              titleFontSize: 14,
            },
            title: { fontSize: 14, anchor: "start" },
          },
        }),
      )}
    />
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const adoption = adoptionData as Adoption[];

  return (
    <Layout description={`${siteConfig.tagline}`}>
      <main className="container container--fluid margin-vert--lg">
        <div className="row">
          <div className="col col--10">
            <Heading as="h1" className={styles.pageTitle}>
              Studies Using reVISit
            </Heading>
            <div className={styles.introLayout}>
              <div className={styles.pageIntro}>
                Many people have already gotten started using reVISit in their
                experiments. Check out all the different ways people are using
                reVISit to produce novel research. It's already been used in{" "}
                {adoption.length} papers. If you&apos;ve used reVISit as
                part of your research, please open a pull request updating{" "}
                <Link href="https://github.com/revisit-studies/reVISit-studies.github.io/blob/main/static/adoption.bib">
                  static/adoption.bib
                </Link>
                . For guidance on the BibTeX format and the fields used on this page,
                see the{" "}
                <Link href="https://github.com/revisit-studies/reVISit-studies.github.io/blob/main/static/README.md">
                  README
                </Link>
                .If you&apos;re not comfortable with that workflow, email us at{" "}
                <Link href="mailto:contact@revisit.dev">contact@revisit.dev</Link> and we'd be happy to add your paper. 
              </div>
              <div className={styles.chartContainer}>
                <AdoptionChart data={adoption} />
              </div>
            </div>
            {adoption.map((adoption: Adoption, index: number) => (
              <Adoption key={index} adoption={adoption} />
            ))}
            <div className="margin-top--md">
              <EditThisPage editUrl="https://github.com/revisit-studies/reVISit-studies.github.io/edit/main/src/pages/adoption/index.tsx" />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
