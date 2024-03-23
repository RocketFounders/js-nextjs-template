/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        PROD: process.env.NODE_ENV,
        REACT_APP_API_URL: process.env.NODE_ENV === "production"  ? '' : 'http://127.0.0.1:8000/api',

    },
}

module.exports = nextConfig
