import esbuild from 'esbuild';

const build = await esbuild.context({
  entryPoints: ['./src/server/server.ts'],
  outfile: './out/index.cjs',
  platform: 'node',
  bundle: true,
  minify: false,
  sourcemap: true
});
await build.watch();