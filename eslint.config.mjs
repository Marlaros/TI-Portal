import nextConfig from 'eslint-config-next';

const config = [
  {
    ignores: ['.next/**', 'node_modules/**', 'pb_data/**']
  },
  ...nextConfig
];

export default config;

