/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
