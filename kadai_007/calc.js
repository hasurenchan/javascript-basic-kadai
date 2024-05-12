// 1以上の整数
let num = Math.floor(Math.random() * 9007199254740991) + 1;

if (num % 3 == 0 && num % 5 == 0) {
    console.log('3と5の倍数です');
}
else if (num % 3 == 0) {
    console.log('3の倍数です');
}
else if (num % 5 == 0) {
    console.log('5の倍数です');
}
else {
    // いずれも当てはまらない場合、数値を出力
    console.log(num);
}