/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "https://jsonplaceholder.typicode.com/photos",
        "https://via.placeholder.com",
        'http://i.annihil.us',
      ],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "via.placeholder.com", 
          // hostname: "i.annihil.us", 
          port: "",
          pathname: "/**",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  