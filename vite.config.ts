import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
// import reactRefresh from '@vitejs/plugin-react-refresh'

//vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    port: 3005,
    open: true
    // cors: false
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        format: 'esm'
        // entryFileNames: 'assets/[name].js',
        // minifyInternalExports: false
      }
    }
  },

  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        Home: {
          external: 'http://localhost:5001/microfrontend/remoteEntry.js',
          format: 'var',
          from: 'webpack',
          externalType: `url`
        }
      },
      shared: ['react', 'react-dom']
    })
  ]
})

// export default defineConfig(({ mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.

//   const env = loadEnv(mode, process.cwd(), '')
//   return {
//     define: {
//       'process.env.REACT_APP_EMP_SERVER': JSON.stringify(env.REACT_APP_EMP_SERVER),
//       'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
//       // If you want to exposes all env variables, which is not recommended
//       // 'process.env': env
//     },
//     server: {
//       host: 'localhost',
//       port: 3005,
//       open: true
//       // cors: false
//     },
//     compilerOptions: {
//       types: ['vite/client']
//     },
//     build: {
//       target: 'esnext',
//       rollupOptions: {
//         external: ['react-query', 'js-big-decimal'],
//         output: {
//           format: 'var'
//           // entryFileNames: 'assets/[name].js',
//           // minifyInternalExports: false
//         }
//       }
//     },
//     // rollupOptions: {
//     //   external: ['react-query', 'js-big-decimal']
//     // },
//     plugins: [
//       react(),
//       // reactRefresh(),
//       federation({
//         name: 'host-app',
//         remotes: {
//           Home: {
//             external: 'http://localhost:5001/microfrontend/remoteEntry.js',
//             format: 'var',
//             from: 'webpack',
//             externalType: `url`
//           }
//         },
//         shared: ['react', 'react-dom']
//       })
//     ]

//     // plugins: [
//     //   reactRefresh(),
//     //   react(),
//     //   federation({
//     //     name: 'host-app',
//     //     remotes: {
//     //       Home: {
//     //         external: 'http://localhost:5001/microfrontend/remoteEntry.js',
//     //         format: 'var',
//     //         from: 'webpack',
//     //         externalType: `url`
//     //       }
//     //     },
//     //     shared: ['react', 'react-dom']
//     //   })
//     // ]
//   }
// })
