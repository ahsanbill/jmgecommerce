export type ServiceBlock =
  | { kind: 'p'; text: string }
  | { kind: 'h'; text: string }
  | { kind: 'ul'; items: string[] }
  | { kind: 'price'; text: string }
  | { kind: 'note'; text: string }
  | {
      kind: 'packages'
      items: { name: string; price?: string; items: string[] }[]
    }

export type ServiceDetails = {
  subtitle: string
  blocks: ServiceBlock[]
}

export const serviceDetails: Record<string, ServiceDetails> = {
  '01': {
    subtitle: 'Discover profitable Amazon product opportunities',
    blocks: [
      {
        kind: 'p',
        text: 'Our Product Hunting service combines multiple data sources and research methodologies to identify Amazon product opportunities with strong demand, manageable competition, and potential profitability.',
      },
      {
        kind: 'p',
        text: 'We conduct product research using professional third-party research platforms, including *Helium 10, Data Dive, Viral Launch, and Jungle Scout*, together with available Amazon data such as *Amazon Brand Analytics* and marketplace-level research.',
      },
      {
        kind: 'h',
        text: 'Our research evaluates multiple factors, including',
      },
      {
        kind: 'ul',
        items: [
          'Product demand and estimated sales volume',
          'Historical sales trends and market stability',
          'Keyword search volume and customer demand',
          'Number and strength of competing listings',
          'Competitor pricing and price positioning',
          'Review volume and competitor review strength',
          'Revenue potential',
          'Estimated Amazon fees and fulfillment costs',
          'Estimated product sourcing and landed costs',
          'Potential profit margins at different selling prices',
          'Keyword competitiveness',
          'Product differentiation opportunities',
          'Market saturation and entry barriers',
          'Potential opportunities for private-label branding',
        ],
      },
      {
        kind: 'h',
        text: 'Research & Profitability Report',
      },
      {
        kind: 'p',
        text: "We don't rely on a single research tool or a single metric. Product opportunities are evaluated using information from multiple sources before being presented to the client.",
      },
      {
        kind: 'p',
        text: 'For selected opportunities, we prepare a detailed market-analysis presentation covering:',
      },
      {
        kind: 'ul',
        items: [
          'Market overview',
          'Competitor analysis',
          'Demand analysis',
          'Keyword analysis',
          'Pricing analysis',
          'Estimated sales and revenue',
          'Estimated Amazon fees',
          'Estimated product costs',
          'Estimated profit margins',
          'Break-even considerations',
          'Suggested selling-price scenarios',
          'Competitive positioning',
          'Potential differentiation strategies',
          'Identified market opportunities and risks',
        ],
      },
      {
        kind: 'p',
        text: 'The pricing analysis can demonstrate different selling scenarios and estimated margins, allowing the seller to understand how changes in selling price, costs, and advertising expenditure can affect profitability.',
      },
      {
        kind: 'price',
        text: 'Service Price: $150 per product research report',
      },
      {
        kind: 'note',
        text: 'Research estimates are based on available marketplace data and third-party research tools. Actual sales, costs, and profitability may vary depending on marketplace conditions, advertising performance, sourcing costs, competition, and other factors.',
      },
    ],
  },
  '02': {
    subtitle: 'Build Amazon listings that customers and search systems can understand',
    blocks: [
      {
        kind: 'p',
        text: 'We create and optimize Amazon product listings using structured keyword research, competitor analysis, and marketplace data.',
      },
      {
        kind: 'p',
        text: 'Our research process may utilize *Helium 10, Jungle Scout, Data Dive, and Amazon Brand Analytics* to identify relevant high-volume keywords, highly relevant long-tail keywords, competitor keyword opportunities, and product-specific search terms.',
      },
      {
        kind: 'p',
        text: "The objective is to create a listing that clearly communicates the product's value to customers while providing Amazon's search systems with relevant and well-structured information about the product.",
      },
      {
        kind: 'h',
        text: 'Our listing optimization includes',
      },
      {
        kind: 'ul',
        items: [
          'Keyword research',
          'Competitor listing analysis',
          'Primary keyword identification',
          'Long-tail keyword research',
          'Search-term analysis',
          'Title optimization',
          'Bullet-point optimization',
          'Product-description optimization',
          'Backend search-term recommendations',
          'Keyword placement strategy',
          'Competitor positioning analysis',
          'Listing structure optimization',
          'SEO-focused content development',
          'Listing review and revisions',
        ],
      },
      {
        kind: 'h',
        text: 'Available packages',
      },
      {
        kind: 'packages',
        items: [
          {
            name: 'Basic',
            price: '$10',
            items: [
              '1 SEO title',
              '5 short bullet points',
              '200 words',
              '1 revision',
            ],
          },
          {
            name: 'Standard',
            price: '$35',
            items: [
              '1 SEO title',
              '5 short bullet points',
              'Product description',
              '300 words',
              '2 revisions',
            ],
          },
          {
            name: 'Premium',
            price: '$60',
            items: [
              '2 fully SEO titles',
              '5 short bullet points',
              'Product description',
              'Backend KWs',
              '400 words',
              'Unlimited revisions',
            ],
          },
        ],
      },
      {
        kind: 'note',
        text: 'Prices shown are per product listing and may vary with the number of products.',
      },
    ],
  },
  '03': {
    subtitle: "Create content that communicates your product's value",
    blocks: [
      {
        kind: 'p',
        text: 'We develop Amazon-focused visual and written content designed to communicate product benefits clearly and create a consistent brand experience.',
      },
      {
        kind: 'h',
        text: 'Our content services can include',
      },
      {
        kind: 'ul',
        items: [
          'Amazon product images',
          'Infographic images',
          'Lifestyle concepts',
          'Product-benefit graphics',
          'Comparison graphics',
          'Feature and specification graphics',
          'A+ Content / Enhanced Brand Content',
          'Brand storytelling',
          'Product descriptions',
          'Marketing copy',
          'Promotional content',
        ],
      },
      {
        kind: 'p',
        text: 'Our objective is to help customers understand the product quickly, communicate key benefits, and maintain consistent brand messaging across the Amazon storefront and product detail pages.',
      },
    ],
  },
  '04': {
    subtitle: 'Manage your Amazon store and resolve operational issues',
    blocks: [
      {
        kind: 'p',
        text: 'Our Amazon Store Management service helps sellers maintain their Amazon operations and address common account, listing, catalog, and compliance-related issues.',
      },
      {
        kind: 'h',
        text: 'Account & listing management',
      },
      {
        kind: 'ul',
        items: [
          'Monitoring account notifications',
          'Monitoring listing status',
          'Identifying suppressed listings',
          'Investigating listing errors',
          'Catalog and product-detail-page issues',
          'Variation-related issues',
          'Product information corrections',
          'Inventory-related listing issues',
        ],
      },
      {
        kind: 'h',
        text: 'Category & product restrictions',
      },
      {
        kind: 'p',
        text: 'We assist sellers in identifying Amazon category and product restrictions and guide them through the available processes for requesting category or product approval where applicable.',
      },
      {
        kind: 'ul',
        items: [
          'Restricted-category checks',
          'Product/category approval guidance',
          'Documentation requirements',
          'Application preparation',
          'Follow-up with Amazon support',
        ],
      },
      {
        kind: 'note',
        text: "Approval is subject to Amazon's eligibility requirements and Amazon's final decision.",
      },
      {
        kind: 'h',
        text: 'Compliance & account issues',
      },
      {
        kind: 'p',
        text: 'We assist with identifying and addressing Amazon compliance-related notifications and account issues, including:',
      },
      {
        kind: 'ul',
        items: [
          'Listing compliance notifications',
          'Product restrictions',
          'Product-detail-page suppression',
          'Policy-related listing issues',
          'Documentation requests',
          'Account health-related notifications',
          'Case preparation and communication with Amazon Support',
        ],
      },
      {
        kind: 'p',
        text: 'We review the issue, identify the applicable Amazon requirements, prepare an appropriate response or action plan, and assist with the next steps.',
      },
      {
        kind: 'price',
        text: 'Store Management Service: $70',
      },
    ],
  },
  '05': {
    subtitle: 'Drive product visibility, sales, and brand awareness',
    blocks: [
      {
        kind: 'p',
        text: 'Our PPC service is designed to increase relevant product visibility on Amazon, generate qualified traffic, support sales velocity, and build long-term brand awareness.',
      },
      {
        kind: 'p',
        text: 'We analyze your product, keywords, competitors, historical campaign performance, conversion data, and advertising metrics before recommending campaign structures and optimization actions.',
      },
      {
        kind: 'h',
        text: 'Campaign management',
      },
      {
        kind: 'p',
        text: 'Depending on the product and advertising objectives, campaigns may include:',
      },
      {
        kind: 'ul',
        items: [
          'Automatic Sponsored Products campaigns',
          'Manual Sponsored Products campaigns',
          'Keyword-focused campaigns',
          'Product-targeting campaigns',
          'Sponsored Brands campaigns',
          'Sponsored Brands video campaigns',
          'Sponsored Display campaigns',
          'Brand-focused campaigns',
          'Competitor-targeting campaigns',
          'Category/product targeting',
          'Discovery campaigns',
          'Defensive targeting strategies',
          'Retargeting opportunities where available',
        ],
      },
      {
        kind: 'p',
        text: "Campaigns are structured according to the product's objectives, marketplace, budget, keyword opportunities, and stage of the product lifecycle.",
      },
      {
        kind: 'h',
        text: 'Beyond Amazon advertising',
      },
      {
        kind: 'p',
        text: 'Where appropriate, we can also recommend off-Amazon promotional activities designed to generate additional awareness and traffic.',
      },
      {
        kind: 'ul',
        items: [
          'Organic social-media content',
          'Product promotion strategies',
          'External traffic opportunities',
          'Brand-awareness campaigns',
          'Social-media promotion',
          'Content distribution',
          'Off-Amazon audience development',
        ],
      },
      {
        kind: 'p',
        text: 'The objective is to create multiple customer touchpoints and increase brand recognition beyond a single Amazon advertising placement.',
      },
      {
        kind: 'h',
        text: 'PPC packages',
      },
      {
        kind: 'packages',
        items: [
          {
            name: '30-Day PPC Management — 1 ASIN',
            price: '$250',
            items: [
              'Campaign management and optimization',
              'Bid adjustments',
              'Targeting analysis',
              'Search-term analysis',
              'Negative targeting recommendations',
              'Budget monitoring',
              'Performance recommendations',
            ],
          },
          {
            name: 'PPC + Store Management',
            price: '$320 / 30 days',
            items: ['PPC management: $250', 'Store management: $70'],
          },
          {
            name: '15-Day PPC Management',
            price: '$150',
            items: [
              'A shorter optimization and management period for sellers who require focused campaign support.',
            ],
          },
          {
            name: 'PPC Consultation & Campaign Audit',
            price: '$70',
            items: [
              'Campaign performance review',
              'Search-term analysis',
              'Keyword analysis',
              'Bid recommendations',
              'Budget recommendations',
              'Negative-targeting recommendations',
              'Campaign-structure recommendations',
              'Identification of optimization opportunities',
              'Detailed action plan explaining what should be changed and why',
            ],
          },
        ],
      },
      {
        kind: 'note',
        text: 'Advertising performance is dependent on product demand, pricing, listing quality, competition, budget, conversion rate, marketplace conditions, and other factors. No specific sales or advertising-result guarantee is provided.',
      },
    ],
  },
  '06': {
    subtitle: 'Establish and protect your brand on Amazon',
    blocks: [
      {
        kind: 'p',
        text: 'We assist brand owners throughout the Amazon Brand Registry process and help them understand the requirements involved in establishing their brand presence on Amazon.',
      },
      {
        kind: 'h',
        text: 'Our assistance can include',
      },
      {
        kind: 'ul',
        items: [
          'Brand Registry preparation',
          'Trademark-related documentation guidance',
          'Brand information preparation',
          'Amazon Brand Registry application assistance',
          'Identification of common registration issues',
          'Assistance with Amazon Brand Registry cases',
          'Guidance regarding brand-related tools and features',
          'Brand protection workflow guidance',
        ],
      },
      {
        kind: 'price',
        text: 'Service Price: $70',
      },
      {
        kind: 'note',
        text: "Amazon approval and eligibility remain subject to Amazon's requirements and review.",
      },
    ],
  },
  '07': {
    subtitle: 'Improve organic product visibility',
    blocks: [
      {
        kind: 'p',
        text: 'Our Amazon SEO service focuses on improving the relevance and discoverability of product listings through structured keyword research and content optimization.',
      },
      {
        kind: 'h',
        text: 'Our approach can include',
      },
      {
        kind: 'ul',
        items: [
          'Search-volume analysis',
          'Primary keyword research',
          'Long-tail keyword research',
          'Competitor keyword analysis',
          'Listing keyword mapping',
          'Title optimization',
          'Bullet-point optimization',
          'Description optimization',
          'Backend search-term recommendations',
          'Indexing checks',
          'Keyword performance monitoring',
          'Organic ranking analysis',
        ],
      },
      {
        kind: 'p',
        text: 'We can also identify opportunities for off-Amazon content and organic promotional activities that may increase brand and product awareness.',
      },
      {
        kind: 'p',
        text: 'The objective is to build sustainable product visibility through relevant search terms and stronger product content rather than relying exclusively on paid advertising.',
      },
    ],
  },
  '08': {
    subtitle: 'End-to-end Amazon launch strategy',
    blocks: [
      {
        kind: 'p',
        text: 'Our Full-Fledged Launch service provides an end-to-end framework for sellers launching a new private-label product on Amazon.',
      },
      {
        kind: 'p',
        text: 'The service can cover the major stages of launching and establishing a product, including:',
      },
      {
        kind: 'h',
        text: '1. Market & product research',
      },
      {
        kind: 'ul',
        items: [
          'Market analysis',
          'Competitor research',
          'Demand analysis',
          'Keyword research',
          'Product positioning',
          'Pricing analysis',
          'Profitability assessment',
        ],
      },
      {
        kind: 'h',
        text: '2. Listing development',
      },
      {
        kind: 'ul',
        items: [
          'SEO keyword research',
          'Product title',
          'Bullet points',
          'Product description',
          'Backend search terms',
          'Competitor analysis',
          'Listing optimization',
        ],
      },
      {
        kind: 'h',
        text: '3. Brand & content preparation',
      },
      {
        kind: 'ul',
        items: [
          'Brand positioning',
          'Product-image strategy',
          'A+ Content strategy',
          'Storefront recommendations',
          'Brand messaging',
        ],
      },
      {
        kind: 'h',
        text: '4. Launch preparation',
      },
      {
        kind: 'ul',
        items: [
          'PPC campaign structure',
          'Keyword targeting',
          'Product targeting',
          'Initial advertising strategy',
          'Budget allocation',
          'Promotional strategy',
          'Inventory considerations',
        ],
      },
      {
        kind: 'h',
        text: '5. Launch & PPC management',
      },
      {
        kind: 'ul',
        items: [
          'Campaign activation',
          'Bid optimization',
          'Search-term analysis',
          'Negative targeting',
          'Budget optimization',
          'Keyword expansion',
          'Conversion analysis',
          'Sales-velocity monitoring',
        ],
      },
      {
        kind: 'h',
        text: '6. Post-launch optimization',
      },
      {
        kind: 'ul',
        items: [
          'Organic keyword monitoring',
          'PPC performance analysis',
          'Listing optimization',
          'Competitor monitoring',
          'Pricing analysis',
          'Advertising efficiency improvements',
          'Growth opportunities',
        ],
      },
      {
        kind: 'h',
        text: 'Full launch packages',
      },
      {
        kind: 'price',
        text: 'Full Amazon Launch: $400–$700',
      },
      {
        kind: 'p',
        text: 'The final price depends on the scope of work, number of ASINs, marketplace, listing requirements, PPC management period, content requirements, and level of ongoing support.',
      },
      {
        kind: 'p',
        text: 'The service is designed for sellers who want coordinated support across product preparation, listing optimization, brand presentation, launch advertising, and post-launch optimization.',
      },
      {
        kind: 'note',
        text: "Amazon sales, rankings, advertising performance, and profitability are affected by market conditions and other factors outside the service provider's control. Therefore, no guaranteed sales, ranking, revenue, or profit outcome is promised.",
      },
    ],
  },
  '09': {
    subtitle: 'Amazon seller dashboard and analytics in one platform',
    blocks: [
      {
        kind: 'p',
        text: 'The JMGEcommerce Amazon Analytics Platform is built to give sellers a clear view of sales, advertising, inventory, and keyword performance — connected through Amazon authorization, with role-specific access and downloadable reporting.',
      },
      {
        kind: 'h',
        text: 'Platform capabilities',
      },
      {
        kind: 'ul',
        items: [
          'Amazon seller dashboard',
          'Sales analytics',
          'Product performance analytics',
          'Brand Analytics data visualization',
          'Keyword/search-term analytics',
          'Advertising performance dashboard',
          'Inventory analytics',
          'ASIN-level reporting',
          'Date-range reporting',
          'Downloadable reports',
          'Automated data synchronization',
          'Seller account connection through Amazon authorization',
          'Role-specific Amazon data access',
          'Pricing/subscription plans',
          'Screenshots or a product demo',
          'Planned launch date',
        ],
      },
    ],
  },
}
