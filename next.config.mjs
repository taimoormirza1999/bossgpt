/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    'TRY_NOW_LINK':'https://bossgpt.com/tool/?page=register'
  },
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