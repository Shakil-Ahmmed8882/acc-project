/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['globalintergold.info'], 
         }
}
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
