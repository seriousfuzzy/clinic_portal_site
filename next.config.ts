import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Turbopack の設定（Next.js 16 ではデフォルト）
  turbopack: {
    // ファイルウォッチャーの問題を回避
    resolveAlias: {},
  },
  // Webpack モードを使用する場合は、以下のコメントを外して turbopack を無効化
  // webpack: (config, { isServer, dev }) => {
  //   if (dev && !isServer) {
  //     config.watchOptions = {
  //       poll: 1000,
  //       aggregateTimeout: 300,
  //       ignored: [
  //         '**/node_modules/**',
  //         '**/.git/**',
  //         '**/.next/**',
  //         '**/dev/**',
  //         '/dev/**',
  //       ],
    //   };
  //   }
  //   return config;
  // },
};

export default nextConfig;
