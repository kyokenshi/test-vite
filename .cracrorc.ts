// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import federation from '@originjs/vite-plugin-federation'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'Home',
//       remotes: {
//         // Home: `http://localhost:5001//microfrontend/remoteEntry.js`
//         Home: `http://localhost:5001/microfrontend/remoteEntry.js`
//       },
//       shared: ['react', 'react-dom']
//     })
//   ],
//   build: {
//     modulePreload: false,
//     target: 'esnext',
//     minify: false,
//     cssCodeSplit: false
//   }
// })



const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = () => ({
  devServer: {
    port: 3001,
  },
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "ApplicationDetail",
          filename: 'remoteEntry.js',
          remotes: {
            remotes: {
              Home: `Home@http://localhost:5001/microfrontend/remoteEntry.js`,
            },
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        }),
      ],
    },
  },
});