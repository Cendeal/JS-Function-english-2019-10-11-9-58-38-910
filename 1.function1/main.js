function reverseString(message) {
    return Array.from(message).reverse().join('');
}

console.log(reverseString('hello')); // should return 'olleh'