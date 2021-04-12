function palindrome(str) {
  const regex = /[A-Za-z0-9]/g;
  const newStr = str.toLowerCase().match(regex);

  if (newStr.join('') === newStr.reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

palindrome('eye');
