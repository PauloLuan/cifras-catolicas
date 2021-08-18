module.exports = {
  siteUrl: process.env.SITE_URL || 'https://cifras-catolicas.vercel.app/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  }
}
