class ConfigAPIURL {
  //  base URL
  static baseUrl = "http://192.168.1.236:3040";

  // static pruchaseChallenge = this.baseUrl + "/user/sub/purchase"; // POST
  static largeAdvertisement = this.baseUrl + "/core/dashboard/categories"; // GET
  static locationSearch = this.baseUrl + "/core/location";

  // testimonials
  static testimonials = this.baseUrl + "/core/dashboard/get";

  static popularCoupons = this.baseUrl + "/core/dashboard/popular-coupon";
  static homeSearchItems = this.baseUrl + "/core/dashboard/searchterms";
}

export default ConfigAPIURL;
