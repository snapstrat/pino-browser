const  pnpPlugin = require('@yarnpkg/esbuild-plugin-pnp').pnpPlugin;
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['index.js'],
  bundle: true,
  outdir: 'build',
  sourcemap: true,
  plugins: [
    pnpPlugin(),
  ],
});
