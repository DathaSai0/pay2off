function urlToText(url) {
  // Decode the URL and replace "%20" with spaces
  return decodeURIComponent(url).replace(/^\/+/, "").replace(/%20/g, " ");
}
export default urlToText;
