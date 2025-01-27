/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["gettiket.com", "jureb.com", "fresible.com", "fresible.link"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  future: {
    webpack5: true,
  },
  target: "serverless",
};

export default nextConfig;
