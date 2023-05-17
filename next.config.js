/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: "build", 
  swcMinify: true,
  eslint:{
    ignoreDuringBuilds:true,
  }
}

module.exports = nextConfig
