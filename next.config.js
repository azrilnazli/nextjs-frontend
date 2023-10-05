/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        customKey: 'my-value',
        
        SERVER_URL: "http://laravel.local",
        SERVER_PORT: 8000
        
      },
}

module.exports = nextConfig
