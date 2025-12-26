/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  basePath: isProd ? "/kasparro-frontend-Ekila-Teja" : "",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
