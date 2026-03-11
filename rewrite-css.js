import { rewrite_url } from "./rewrite-urls.js"

function rewrite_css_urls(css) {
  let regex = /url\(["']?([^"'\s]+)["']?\)/g; // Will fix more edge cases later
  let rewritten = css.replace(regex, (match, g1) => { return `url("${rewrite_url(g1)}")` });
  return rewritten;
}

function rewrite_simple_imports(css) {
  let regex = /import\s+["']([^"']+)["']/g;
  let rewritten = css.replace(regex, (match, g1) => `import("${rewrite_url(g1)}")`);
  return rewritten;
}
