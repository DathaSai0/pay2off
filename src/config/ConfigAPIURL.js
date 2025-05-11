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

  // get faqs
  static getFaqs = this.baseUrl + "/core/dashboard/get-faq";

  // shops by category id
  static getShopsByCategoryId =
    this.baseUrl + "/core/dashboard/searchByCategory";
  //store details
  static getStoreDetails = this.baseUrl + "/core/userCoupons/getStoreDetails";

  //support request
  static supportRequest =
    this.baseUrl + "/core/dashboard/support-request-type/user";
}

export default ConfigAPIURL;
