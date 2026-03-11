function simplify_assignurl(js) {
  let withwindow = /(window\.location\.href)|(window\[["']location["']\]\[["']href["']\])/gm;
  let withoutwindow = /(location\.href)|(location\[["']href["']\])/gm;
}
