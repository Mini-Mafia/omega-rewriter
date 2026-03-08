import { rewrite_url } from "./rewrite-urls.js"

function rewrite_css_urls(css) {
  const regex = /url\(["']?([^"'\s]+)["']?\)/; // Will fix more edge cases later
  const rewritten = css.replace(regex, (match, g1) => { return `url("${rewrite_url(g1)}")` });
  return rewritten;
}
