import { config } from "./config.js";

function url_to_service_url(fullUrl) {
  let encoded = encodeURIComponent(fullUrl);
  return `${config.prefix}${encoded}`;
}

function relative_to_absolute(relative, base) {
  let urlObject = new URL(relative, base);
  return urlObject.href;
}

export function rewrite_url(url, page) {
  let fullUrl = relative_to_absolute(url, page);
  let serviceUrl = url_to_service_url(fullUrl);
  return serviceUrl;
}
