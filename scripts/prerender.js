const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const { run } = require('react-snap');

const projectRoot = process.cwd();
const packageJson = require(path.join(projectRoot, 'package.json'));

function getFixWebpackChunksIssue() {
  const reactScriptsVersion =
    packageJson.devDependencies?.['react-scripts'] || packageJson.dependencies?.['react-scripts'] || '';
  const majorVersion = Number.parseInt(reactScriptsVersion, 10);

  if (majorVersion === 1) {
    return 'CRA1';
  }

  if (majorVersion === 2) {
    return 'CRA2';
  }

  return false;
}

function getRoutesFromSitemap() {
  const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const matches = sitemap.match(/<loc>(.*?)<\/loc>/g) || [];

  const routes = matches
    .map((entry) => entry.replace('<loc>', '').replace('</loc>', '').trim())
    .map((entry) => {
      const url = new URL(entry);
      return url.pathname === '' ? '/' : url.pathname.replace(/\/$/, '') || '/';
    });

  return Array.from(new Set(['/'].concat(routes)));
}

run({
  publicPath: process.env.PUBLIC_URL || '/',
  source: 'build',
  destination: 'build',
  include: getRoutesFromSitemap(),
  crawl: true,
  skipThirdPartyRequests: true,
  puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  fixWebpackChunksIssue: getFixWebpackChunksIssue(),
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
