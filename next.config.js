/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rb.gy",
        port: "",
        // pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "www.gravatar.com",
        port: "",
        // pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        // pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        // pathname: '/**',
      },
    ],
  },
}
