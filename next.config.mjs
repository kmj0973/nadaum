const isDev = process.env.NODE_ENV === "development";

import nextPwa from "next-pwa";

const withPWA = nextPwa({
  dest: "public",
  disable: isDev,
  register: true,
  skipWaiting: true,
});

const config = {
  reactStrictMode: true,
};

export default withPWA(config);
