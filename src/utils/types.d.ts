// declare module "*.png";
// declare module "*.svg";
// declare module "*.jpeg";
// declare module "*.jpg";
export type product = {
  _id: string;
  title: string;
  price: number;
  local_price: number;
  slug: string;
  description: {
    head_desc: string;
    sub_desc: {
      key: string;
      value: string;
    }[];
  };
  table: { head: string; rows: [string] }[];
  meta_data: {
    key: string;
    value: string;
  }[];

  category: {
    primary: string;
    secondry: string[];
  };
  sizes: {
    qty: Number;
    size: string;
  }[];
  brand: string;
  quantity: number;
  sold: number;
  images: {
    primary: {
      public_id: string;
      asset_id: string;
      url: string;
    }[];
    descriptive: {
      public_id: string;
      asset_id: string;
      url: string;
    }[];
  };
  colors: {
    qty: Number;
    color: string;
  }[];
  tags: string[];
  is_cod_availabe: Boolean;
  policy: {
    exchange: { status: Boolean; validity: Number };
    return_or_refund: { status: Boolean; validity: Number };
    description: string;
    rules: string[];
  };
  terms_and_conditions: string[];
  featured_on: string[];
  as_draft: Boolean;
};
export interface user {
  _id: string;
  firstname?: string;
  lastname?: string;
  email: string;
  mobile?: string;
  password: string;
  role: "user" | "admin";
  isBlocked: boolean;
  refreshToken: string;
  passwordChangedAt: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
}
export type address = {
  _id: string;
  phone_no: string;
  country: string;
  first_name: string;
  last_name: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zipcode: string;
  user: user | string;
  [key: string]: string;
};
export type wishlist = {
  _id: string;
  product: product | string;
  user: user | string;
};
export type cart = {
  _id: string;
  product: product | string;
  quantity: number;
  user: user | string;
};

export type order = {
  _id: string;
  products: {
    product: product | string;
    quantity: number;
  }[];
  paymentIntent: {};
  paymentMode: "COD" | "RAZORPAY";
  orderStatus:
    | "Not Processed"
    | "Processing"
    | "Dispatched"
    | "Cancelled"
    | "Delivered";
  address: address | string;
  user: user | string;
};
