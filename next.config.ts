import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/agentsight',
        destination: '/projects/agentsight',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
