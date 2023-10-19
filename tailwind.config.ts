import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        logo: 'url(/logo.svg)',
        'layer-1': 'url(/img-layer/layer-1.jpg)',
        'layer-2': 'url(/img-layer/layer-2.jpg)',
        'layer-3': 'url(/img-layer/layer-5.jpg)',
        'layer-4': 'url(/img-layer/layer-6.jpg)',
      },
      colors: {
        'border-gray': 'rgba(255, 355, 255, .4)',
      },
    },
  },
  plugins: [require('tailwindcss-3d')],
}
export default config
