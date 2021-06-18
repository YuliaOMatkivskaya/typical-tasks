'use strict';

let anagram;
function checkAnagram(anagramArray) {

if((anagramArray[0].toUpperCase().split("").sort().join("")) == (anagramArray[1].toUpperCase().split("").sort().join(""))) {
            anagram = true;
            
        } else{
            anagram = false;
            }                  
    return anagram;

}
let example = [["abcabC", "abcabc"], ["abcabcD", "abcabcF"], ["abcabcK", "abcabcd"]];

for (let i=0;i<example.length;i++){
checkAnagram(example[i]);
console.log(`${example[i]}` + ` слова анаграммы `+ `${anagram}`);
}