/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'content.sorteostec.org',
            port: '',
            pathname: '/sites/default/files/menu_icons/**',
          },
        ],
    },
};

export default nextConfig;
