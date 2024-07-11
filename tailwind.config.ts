import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';

export default {
  content: [],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['heroicons-solid']),
    }),
  ],
};
