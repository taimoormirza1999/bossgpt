/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: '/landing',
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