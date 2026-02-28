/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/scentarchive', destination: '/', permanent: false },
      { source: '/scentarchive/', destination: '/', permanent: false },
      { source: '/index.html', destination: '/', permanent: false },
      { source: '/home', destination: '/', permanent: false },
    ];
  },
};

module.exports = nextConfig;
