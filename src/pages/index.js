import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  // ... some feature block (react)
]

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Bee UI"
      description="Bee UI is a lightweight SCSS based UI Framework. You can use, manage and contribute with it in easyest way..."
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--secondary button--lg",
                styles.getStarted
              )}
              to={"docs/intro"}
            >
              Get started!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {/* <VideoContainer /> */}
      </main>
    </Layout>
  );
}

export default Home;
