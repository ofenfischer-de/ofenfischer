import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig();

export default {
  ...config,
  // defineCloudflareConfig() drops unrecognized top-level fields (like
  // buildCommand), so it must be merged in manually here. Without this,
  // OpenNext defaults to `npm run build`, which recurses into the "build"
  // npm script (that script runs this very command).
  buildCommand: "npx next build",
};
