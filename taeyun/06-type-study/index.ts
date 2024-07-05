type ApiTypes = {
  success: boolean;
  result: {
    itme: ItemType;
    maxAppliedCoupon: MaxAppliedCouponType;
    availableFreshShipping: boolean;
    isOverFreshShippingLimit: boolean;
    hasAssociatedItem: boolean;
    orderPointRate: number;
    isFreshShippingProvinces: boolean;
    canIssueGradeCouponPack: boolean;
    availableDiscountBook: boolean;
    couponAppliedPrice: number;
    couponAppliedAmount: number;
    showsCouponAppliedPrice: boolean;
    maxDiscountedPrice: number;
    maxDiscountRate: number;
  };
};

type MaxAppliedCouponType = {
  _id: string;
  state: string;
  discountDateRange: string[];
  discountType: string;
  appliedTo: string;
  appliedShops: [];
  isSignInCoupon: boolean;
  isAppCoupon: boolean;
  isShownOnPublic: boolean;
  multiDiscounts: boolean;
  isRemind: boolean;
  usableType: string;
  totalIssuedCount: number;
  usedCount: number;
  isSpecialDiscount: boolean;
  shopType: string;
  issueType: string;
  createdBy: string;
  codeName: string;
  description: string;
  limit: number;
  discountValue: number;
  minAmountForUse: number;
  maxDiscountPrice: number;
  usableDay: number;
  usableDateRange: {};
  publisher: string;
  updatedAt: string;
  createdAt: string;
};

type ItemType = {
  _id: string;
  productOptions: StateType[];
  cashbackProductOptions: StateType[];
  cashbackPrice: number;
  additionItemOptions: [];
  itemStorageMethods: {
    FROZEN: string[];
  };
  isReserved: boolean;
  reservedDate: null;
  itemName: string;
  state: string;
  discountedPriceByCoupon: number;
  discountedPrice: number;
  discountRate: number;
  discountPrice: number;
  price: number;
  isSpecialDiscount: boolean;
  shop: ShopType;
  shopType: string;
  itemKey: string;
  isGiftItem: boolean;
  isCashbackItem: boolean;
  isAdultItem: boolean;
  isPresentItem: boolean;
  isHideInList: boolean;
  blockShipDate: boolean;
  stateMessage: string;
  orderCount: number;
  score: number;
  bestScore: number;
  reviewCount: number;
  reviewAverageRating: number;
  linkedSumPlatingReviewCount: number;
  tags: string[];
  isFreeDelivery: boolean;
  icon: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  firstPublishedAt: string;
  shareText: string;
  minOrderQuantity: null;
  brand: string;
  model: string;
  videos: VideosType;
  itemStorageMethod: string;
  shelfLife: string;
  bestBeforeDate: string;
  expiryDateType: string;
  categories: {
    subCategoryIds: string[];
    categoryId: string;
  }[];
  noDeliveryToRestrictedAreas: boolean;
  isOnlyFreshShipping: boolean;
  btobNotice: string;
  isBtobNotice: boolean;
  categoryNames: {
    categoryName: string;
    subCategoryNames: string[];
  }[];
  description: string;
  descriptionTests: [];
  publicNotificationType: string;
  publicNotification: Record<"key" | "label" | "value", string>[];
  globalNotice: null;
  relevantItemIds: string[];
  descriptionMode: string;
  publishingTemplate: [];
  linkedSumReviewCount: number;
  cashbackRewardAmount: number;
  simpleDescription: string;
  bm: string;
  isWingeatOnly: boolean;
  images: string[];
  thumbnailUrls: string[];
  itemThumbnailImages: Record<"image" | "url" | "thumbnailUrl", string>[];
  isFreeShipping: boolean;
  badges: {
    label: string;
  }[];
  isNew: boolean;
  isBtobItem: boolean;
  isRestrictPrivateDiscount: boolean;
  discountPriceByNonItemCoupon: number;
  discountedPriceByNonItemCoupon: number;
  discountRateByNonItemCoupon: number;
  showsCouponAppliedPrice: boolean;
  representativeReview: {
    _id: string;
    nps: number;
    reply: null;
    writer: {
      userId: string;
      name: string;
      orderedCount: number;
      nickname: string;
      profileImage: string;
      isOfficial: boolean;
      grade: string;
      lastIssuedGradeCouponsAt: null;
    };
    createdAt: string;
    isReorder: boolean;
    images: string[];
    thumbnailUrls: string[];
    description: string;
    optionNames: string[];
  };
  expireDateInfo: Record<"name" | "expireDate", string>[];
  isGroupBuyingItem: boolean;
};

type StateType = {
  state: string;
};

type ShopType = {
  _id: string;
  shopType: string;
  isWingeatShop: boolean;
  state: string;
  shopKey: string;
  shopName: string;
  companyName: string;
  deliveryMethod: {
    shipDaysByOrder: string[];
    freshShipDaysByOrder: string[];
    provincesFreshShippingInfo: {
      province: string;
      freshShippingEndTime: string;
    }[];
    freeConditionalAmount: number;
    baseCost: number;
    deliveryCompany: string;
    canDeliverRestrictedArea: boolean;
    restrictedAreaCost: number;
    hideShipDate: boolean;
    endTime: string;
    freshShippingEndTime: string;
    shipDate: string;
    stopDates: [];
    freshStopDates: [];
    isFreshShipping: boolean;
    freshShipDate: string;
    freshShippingDeadline: string;
    isReceiveTomorrow: boolean;
    receiveDate: string;
    receiveDay: string;
    isFreshShippingReceiveTomorrow: false;
    freshShippingReceiveDate: string;
    freshShippingReceiveDay: string;
    shippingPriceStr: string;
    shopFreeAmount: number;
  };
  president: string;
  corpRegNum: string;
  onlineSalesReg: string;
  address: {
    address1: string;
    address2: string;
    postalCode: string;
    addressJibun: string;
  };
  description: null;
  topNotice: null;
  bottomNotice: string;
  shipInfos: {
    normalShipInfos: [
      {
        shipDate: string;
        deliveryDate: string;
        isValid: boolean;
      }
    ];
  };
};

type VideosType = {
  url: string;
  image: {
    total: number;
    url: string;
    relative_url: string;
    processed_url: [
      {
        url: string;
        relative_url: string;
        width: number;
      }
    ];
  };
}[];
