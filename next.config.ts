import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    after: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },

  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};

const sentryWebpackPluginOptions = {
  authToken: process.env.SENTRY_AUTH_TOKEN,
  org: "yc-directory-6b",
  project: "yc-directory",

  silent: !process.env.CI,
  widenClientFileUpload: true,

  reactComponentAnnotation: {
    enabled: true,
  },

  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
