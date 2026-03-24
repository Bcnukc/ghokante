// next-sitemap.config.js  (in project root, NOT in app/)
/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://ghokante.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,

  // Exclude private pages from sitemap
  exclude: ["/profile", "/admin", "/upload"],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/profile", "/admin", "/upload"],
      },
    ],
    additionalSitemaps: [
      "https://ghokante.com/server-sitemap.xml", // For dynamic pages later
    ],
  },
};

module.exports = config;
