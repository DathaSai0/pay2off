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
  //categories
  static getCategories = this.baseUrl + "/core/dashboard/categories";

  //coupons
  static getTrendingCoupons = this.baseUrl + "/core/dashboard/trending-coupon";
  static getPopularCoupons = this.baseUrl + "/core/dashboard/popular-coupon";

  // adds
  static getLargeAdds = this.baseUrl + "/core/dashboard/large-ad";
  static getSmallAdds = this.baseUrl + "/core/dashboard/small-ad";

  //store details
  static getStoreDetails = this.baseUrl + "/core/userCoupons/getStoreDetails";
}

export default ConfigAPIURL;
