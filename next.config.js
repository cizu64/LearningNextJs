/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'design.gs.com',
            port: '',
            pathname: '/**',
          },
        ],
      }
};

module.exports = nextConfig;
