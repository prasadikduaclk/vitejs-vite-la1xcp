import vitePluginString from 'vite-plugin-string'

export default {
  plugins: [vitePluginString()]
}

import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [glsl()]
});