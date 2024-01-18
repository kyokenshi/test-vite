import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    port: 3005,
    open: true
    // cors: false
  },

  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        // from: 'webpack',
        // externalType: `url`,
        // external: 'http://localhost:5001/microfrontend/remoteEntry.js',
        // format: 'essm',
        // editor: {

        // },
        remoteApp: 'http://localhost:5001/microfrontend/remoteEntry.js'
      },
      shared: ['react', 'react-dom']
    })
  ]
})
