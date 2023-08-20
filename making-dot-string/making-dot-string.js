const formatDotString = (string, longOfString) => {
    return string.substring(0, longOfString) + "...";
};

const myString = "Hello, my name is Arief Rachman Hakim.";
console.log(formatDotString(myString, 10)); //Hello, my ...
console.log(myString[10]); //n -> it will replace  by ...
