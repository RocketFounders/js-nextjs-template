/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production'

const nextConfig = {
    env: {
        PROD: prod,
        REACT_APP_API_URL: prod ? '/api' : 'http://127.0.0.1:8000/api',
    },
}

module.exports = nextConfig
