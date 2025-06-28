/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["www.tickertape.in"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "picsum.photos",
        },
        {
          protocol: "https",
          hostname: "imagedelivery.net",
        },
      ],
    },
  };
  
  export default nextConfig;
  