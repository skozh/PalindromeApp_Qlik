module.exports.palindrome = function (str) {
  
  var re = /[^A-Za-z0-9]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  
  return reverseStr === lowRegStr;  // Check palindrome; return True or False
};
