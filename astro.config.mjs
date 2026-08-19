import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://getwren.xyz',
  prefetch: false,
  integrations: [
    starlight({
      title: 'Wren',
      description: 'User documentation for the Wren desktop EVM wallet and Wren Companion.',
      favicon: '/assets/wren-favicon-32.png',
      logo: {
        src: './public/assets/wren-mark.svg',
      },
      customCss: ['./src/styles/docs.css'],
      components: {
        MobileMenuToggle: './src/components/MobileMenuToggle.astro',
        ThemeProvider: './src/components/DarkThemeProvider.astro',
        ThemeSelect: './src/components/DarkThemeSelect.astro',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/jorphex/wren',
        },
      ],
      sidebar: [
        { slug: 'docs' },
        { slug: 'docs/features' },
        { slug: 'docs/release-notes' },
        {
          label: 'Get started',
          items: [
            { slug: 'docs/getting-started/install' },
            { slug: 'docs/getting-started/onboarding' },
            { slug: 'docs/getting-started/companion' },
          ],
        },
        {
          label: 'Use Wren',
          items: [
            { slug: 'docs/use-wren/accounts' },
            { slug: 'docs/use-wren/networks' },
            { slug: 'docs/use-wren/tokens' },
            { slug: 'docs/use-wren/earn' },
            { slug: 'docs/use-wren/settings' },
          ],
        },
      ],
    }),
  ],
});
