/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Router by disabling Next.js routing for client-side routes
  // This tells Next.js to not handle these routes server-side
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/',
      },
    ];
  },
};

export default nextConfig;
