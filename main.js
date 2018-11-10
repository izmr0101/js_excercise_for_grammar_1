// lastName を作成して、文字列 で名字をセットする

const lastName = '山田';

// firstName を作成して、文字列 で下の名前をセットする

const firstName = '太郎';

// fullName を作成して、 変数 lastname と 変数 firstName を使ってフルネームをセット

const fullName = lastName + ' ' +firstName;

// myAge を作成して、数値 で年齢をセットする

const myAge = 10;

// friendAge を作成して、 数値 で 変数 myAge とは異なる値をセットする

const friendAge = 13;

// totalAge を作成して、 変数 myAge と 変数 friendAge を足した値をセットする

const totalAge = myAge + friendAge;

// numberOfDays を作成して、 totalAgeを日数に変換した値をセットする。

const numberOfDays = 365 * totalAge;

// numberOfChildren を作成して、 数値 で 3をセットする

const numberOfChildren = 3;

// numberOfCakes を作成して、 数値 で 10 をセットする (numberOfCakes => ケーキの個数を表す変数)

const numberOfCakes = 10;

// numberOfCakesByChild を作成して、1人当たりのケーキの個数をセットする

const numberOfCakesByChild = numberOfCakes / numberOfChildren;

// numberOfRestOfCakes を作成して、10個のケーキを3人の子供で分け与えたときのあまりの数をセットする

const numberOfRestOfCakes = numberOfCakes % numberOfChildren;

// 全てconsole.logを使ってデベロッパーツールのコンソールで表示

console.log(lastName);
console.log(firstName);
console.log(fullName);
console.log(myAge);
console.log(friendAge);
console.log(totalAge);
console.log(numberOfDays);
console.log(numberOfChildren);
console.log(numberOfCakes);
console.log(numberOfCakesByChild);
console.log(numberOfRestOfCakes);