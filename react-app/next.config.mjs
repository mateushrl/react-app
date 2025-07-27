const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/react-app/" : "",
  basePath: isProd ? "/react-app" : "",
  output: "export",
};

export default nextConfig;