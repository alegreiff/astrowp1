// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['wordpress.alegreiff.com']
    
  },
  integrations: [tailwind({
    applyBaseStyles: false,
  }), react()],
  
});