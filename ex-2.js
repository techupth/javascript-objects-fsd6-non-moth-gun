// Exercise #2 Product

const product = {
  name: "Xiaomi Air Purifier",
  price: 4000,
  ratings: 2.5,
  photo: null,
};
console.log(product);
let socialMediaShare = "facebookShare";
// Start code here
product["ratings"] = 4.5;
product["photo"] =
  "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-air-purifier-3H/replace_03.jpg";
console.log(product);

product["code"] = "IT0101010";
delete product.ratings;
console.log(product);
