// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://www.bossgpt.com', 
    generateRobotsTxt: true, 
    sitemapSize: 5000, 
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/private-page', '/admin/*'],
    additionalPaths: async (config) => {
        return [
          {
            loc: 'https://www.bossgpt.com/tool',
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: new Date().toISOString(),
          }
        ];
      }
      
  };
  