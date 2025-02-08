/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  
  env : { AUTH_SECRET: process.env.NEXTAUTH_SECRET, // pulls from .env file
    AUTH_URL: process.env.NEXTAUTH_URL, // pulls from .env file


NEXT_PUBLIC_BACKEND_URL:process.env.NEXT_PUBLIC_BACKEND_URL,
NEXT_PUBLIC_APP_URL:process.env.NEXT_PUBLIC_APP_URL,

GOOGLE_CLIENT_ID : process.env.GOOGLE_CLIENT_ID,
GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_ID,
}
};

export default nextConfig;
