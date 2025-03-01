/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: '/landing',
  assetPrefix: '/landing',

    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*', 
        },
      ],
    },
  };
  
  export default nextConfig;