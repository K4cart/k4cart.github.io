import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start here
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/go-live/overview"
            style={{marginLeft: '0.75rem'}}>
            Go live checklist
          </Link>
        </div>
      </div>
    </header>
  );
}

const cards = [
  {
    title: 'Create your account',
    body: 'Sign up, verify your email, and open your merchant dashboard.',
    to: '/docs/getting-started/create-account',
  },
  {
    title: 'Set up your store',
    body: 'Pick a name and free subdomain, then walk through the five go-live steps.',
    to: '/docs/getting-started/create-store',
  },
  {
    title: 'Sell every day',
    body: 'Manage products, orders, shipping, payments, and your public storefront.',
    to: '/docs/catalog/products',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Merchant help centre"
      description="Plain-language guides for k4cart store owners — get started, complete onboarding, and use every key feature.">
      <HomepageHeader />
      <main>
        <section className="container margin-vert--lg">
          <div className="row">
            {cards.map((card) => (
              <div key={card.to} className="col col--4 margin-bottom--lg">
                <div className="card" style={{height: '100%'}}>
                  <div className="card__header">
                    <Heading as="h3">{card.title}</Heading>
                  </div>
                  <div className="card__body">
                    <p>{card.body}</p>
                  </div>
                  <div className="card__footer">
                    <Link className="button button--primary button--sm" to={card.to}>
                      Read guide
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
