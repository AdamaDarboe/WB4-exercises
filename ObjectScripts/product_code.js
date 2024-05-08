"use strict"

let partcode1 = "ABC:1234-M";
let partcode2 ="XYZ:322-L";
let partcode3 = "ACME:6-5";



let thispartcode =partcode1;


function getSupplier(code) {
    let supplierIndexEnd = code.indexOf(":");
    let supplierName = code.substring(0 , supplierIndexEnd);
 
    return supplierName;
 }
 function getProductNumber(code) {
     let productNumberIndexBegining = code.indexOf(":")
     let productNumberIndexEnd = code.indexOf("-");
     let productNumber = code.substring(productNumberIndexBegining + 1, productNumberIndexEnd);
     
     return productNumber;
 }
 function getSize(code) {
    let productSizeIndexStart = code.indexOf("-");
    let productSize = code.substring(productSizeIndexStart + 1); 
 
 //    console.log(productSize);
 
    if (productSize == "L") {
     let sizeName = "large"
     let result = sizeName + " (" + productSize + ")" ;
 
     return result;
    } else if (productSize == "M") {
     let sizeName = "medium"
     let result = sizeName + " (" + productSize + ")" ;
 
     return result;
    } else if (!isNaN(productSize)) {
     let sizeName = "size"
     let result = sizeName + " (" + productSize + ")" ;
 
     return result;
    };
 }





console.log(getSupplier(thispartcode));

console.log(getProductNumber(thispartcode));

console.log(getSize(thispartcode));

