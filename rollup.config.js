import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.js',
  output: {
    file: isProduction ? 'dist/vuen-popper.min.js' : 'dist/vuen-popper.js',
    format: 'umd',
    name: 'VueNPopper',
  },
  plugins: [
    resolve({ extensions: ['.vue'] }),
    vue({
      template: {},
      css: false,
    }),
    babel({
      runtimeHelpers: true,
      externalHelpers: false,
    }),
    (isProduction && terser())
  ],
};
