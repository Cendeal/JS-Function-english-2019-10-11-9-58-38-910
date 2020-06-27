function countWords(message) {
    return (message.match(/\b\w+\b/g) || []).length;
}

console.log(countWords('Good morning, I love JavaScript.')); // should return 5