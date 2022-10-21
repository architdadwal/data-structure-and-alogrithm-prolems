// string anagram
// hello => lleho

//condition 1
//length of both strings should be same

//condition 2
// string 1 'hello'
// {h:1,e:1,l:2,o:1}

function isAnagram(string1, string2) {
  if (string1.length != string2.length) {
    return false;
  }
  let counter = {};
  for (let letter of string1) {
    // console.log(letter);
    counter[letter] = (counter[letter] || 0) + 1;
    console.log(counter[letter]);
  }
  // console.log(counter);

  for (let items of string2) {
    if (!counter[items]) {
      return false;
    }

    counter[items] -= 1;
  }
  return true;
}
//isAnagram("hello", "lleho");
const check = isAnagram("archit", "tcharidd");
console.log(check);
