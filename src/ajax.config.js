// export const domain ="/apis"
let domain = "" ;

if (process.env.NODE_ENV === 'development') {
  domain = "/apis"
}

// ?isNewVersion=1&_format_=json";
// export const a = domain+ '/cart/cart.json' 
