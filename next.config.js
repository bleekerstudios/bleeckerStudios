/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    siteTitle: 'Bleecker Studios',
    siteDescription: 'Your company description.',
    siteKeywords: 'your company keywords',
    siteUrl: 'You site url',
    siteImagePreviewUrl: '/images/blackestmask.png',
    twitterHandle: '@your_handle'
  } 
}

module.exports = nextConfig
