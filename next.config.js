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
    siteKeywords: '',
    siteUrl: 'https://www.bleecker-studios.com/',
    siteImagePreviewUrl: '/images/blackestmask.png',
    twitterHandle: '@bleeckerstudios'
  } 
}

module.exports = nextConfig
