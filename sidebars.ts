import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  merchantSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      items: [
        'getting-started/create-account',
        'getting-started/create-store',
        'getting-started/dashboard-tour',
        'getting-started/onboarding-checklist',
      ],
    },
    {
      type: 'category',
      label: 'Go live',
      collapsed: false,
      items: [
        'go-live/overview',
        'go-live/add-product',
        'go-live/connect-payments',
        'go-live/setup-shipping',
        'go-live/business-details',
        'go-live/brand-storefront',
      ],
    },
    {
      type: 'category',
      label: 'Catalog',
      items: [
        'catalog/products',
        'catalog/categories',
        'catalog/collections',
      ],
    },
    {
      type: 'category',
      label: 'Orders',
      items: [
        'orders/managing-orders',
        'orders/statuses',
      ],
    },
    {
      type: 'category',
      label: 'Storefront & settings',
      items: [
        'settings/general',
        'settings/appearance',
        'settings/domains',
        'settings/payments',
        'settings/shipping',
        'settings/policies',
        'settings/billing',
        'settings/advanced',
      ],
    },
    {
      type: 'category',
      label: 'Plans & limits',
      items: ['plans/overview'],
    },
    {
      type: 'category',
      label: 'Help',
      items: ['help/faq', 'help/contact'],
    },
  ],
};

export default sidebars;
