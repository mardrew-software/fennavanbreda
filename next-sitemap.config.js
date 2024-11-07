/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://fennavanbreda.com', // Replace with your site URL
    generateRobotsTxt: true, // (optional) Generate robots.txt
    changefreq: 'monthly',
    priority: 0.7,
    sitemapSize: 5000, // Maximum entries per sitemap file
    generateIndexSitemap: true // Generate a sitemap index
};
