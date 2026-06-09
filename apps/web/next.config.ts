import type { NextConfig } from "next";
import { config } from "dotenv";
import path from "path";

// Load the root .env file manually so Next.js server processes can see it
config({ path: path.resolve(process.cwd(), "../../.env") });

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
};

export default nextConfig;
