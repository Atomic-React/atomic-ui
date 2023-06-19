// vite.config.ts
import path from "path";
import react from "file:///Users/bryan/Projects/00_Atomic_React/02_PROJECTS/atomic-ui/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///Users/bryan/Projects/00_Atomic_React/02_PROJECTS/atomic-ui/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/bryan/Projects/00_Atomic_React/02_PROJECTS/atomic-ui/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/bryan/Projects/00_Atomic_React/02_PROJECTS/atomic-ui/packages/atomic-ui";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true })
  ],
  build: {
    lib: {
      entry: {
        "forms": path.resolve(__vite_injected_original_dirname, "src/forms/"),
        "nav": path.resolve(__vite_injected_original_dirname, "src/nav"),
        "": path.resolve(__vite_injected_original_dirname, "src/index.ts")
      },
      name: "atomic-ui",
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName ? entryName + "/" : ""}atomic-ui.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYnJ5YW4vUHJvamVjdHMvMDBfQXRvbWljX1JlYWN0LzAyX1BST0pFQ1RTL2F0b21pYy11aS9wYWNrYWdlcy9hdG9taWMtdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9icnlhbi9Qcm9qZWN0cy8wMF9BdG9taWNfUmVhY3QvMDJfUFJPSkVDVFMvYXRvbWljLXVpL3BhY2thZ2VzL2F0b21pYy11aS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYnJ5YW4vUHJvamVjdHMvMDBfQXRvbWljX1JlYWN0LzAyX1BST0pFQ1RTL2F0b21pYy11aS9wYWNrYWdlcy9hdG9taWMtdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW1xuXHRcdHJlYWN0KCksXG5cdFx0ZHRzKHsgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSB9KSxcblx0XSxcblx0YnVpbGQ6IHtcblx0XHRsaWI6IHtcblx0XHRcdGVudHJ5OiB7XG5cdFx0XHRcdCdmb3Jtcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvZm9ybXMvJyksXG5cdFx0XHRcdCduYXYnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL25hdicpLFxuXHRcdFx0XHQnJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLFxuXHRcdFx0fSxcblx0XHRcdG5hbWU6ICdhdG9taWMtdWknLFxuXHRcdFx0Zm9ybWF0czogWyAnZXMnLCAnY2pzJyBdLFxuXHRcdFx0ZmlsZU5hbWU6IChmb3JtYXQsIGVudHJ5TmFtZSkgPT4gYCR7IGVudHJ5TmFtZSA/IGVudHJ5TmFtZSArICcvJyA6ICcnIH1hdG9taWMtdWkuJHsgZm9ybWF0IH0uanNgLFxuXHRcdH0sXG5cdFx0cm9sbHVwT3B0aW9uczoge1xuXHRcdFx0ZXh0ZXJuYWw6IFsgJ3JlYWN0JywgJ3JlYWN0LWRvbScgXSxcblx0XHRcdG91dHB1dDoge1xuXHRcdFx0XHRnbG9iYWxzOiB7XG5cdFx0XHRcdFx0cmVhY3Q6ICdSZWFjdCcsXG5cdFx0XHRcdFx0J3JlYWN0LWRvbSc6ICdSZWFjdERPTScsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFosT0FBTyxVQUFVO0FBRTdhLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFKaEIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sSUFBSSxFQUFFLGtCQUFrQixLQUFLLENBQUM7QUFBQSxFQUMvQjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ04sS0FBSztBQUFBLE1BQ0osT0FBTztBQUFBLFFBQ04sU0FBUyxLQUFLLFFBQVEsa0NBQVcsWUFBWTtBQUFBLFFBQzdDLE9BQU8sS0FBSyxRQUFRLGtDQUFXLFNBQVM7QUFBQSxRQUN4QyxJQUFJLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDM0M7QUFBQSxNQUNBLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBRSxNQUFNLEtBQU07QUFBQSxNQUN2QixVQUFVLENBQUMsUUFBUSxjQUFjLEdBQUksWUFBWSxZQUFZLE1BQU0sZUFBaUI7QUFBQSxJQUNyRjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2QsVUFBVSxDQUFFLFNBQVMsV0FBWTtBQUFBLE1BQ2pDLFFBQVE7QUFBQSxRQUNQLFNBQVM7QUFBQSxVQUNSLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNkO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
