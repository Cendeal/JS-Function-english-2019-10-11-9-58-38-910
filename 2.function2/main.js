function palindrome(message) {
    if(!message){
        return false;
    }
    let start = 0, end = message.length - 1;
    while (start < end) {
        if (message[start] === message[end]) {
            start++;
            end--;
        } else {
            return false;
        }
    }
    return true;
}

console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true