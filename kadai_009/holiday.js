// すべての祝日
holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// インデクサ
let i = 0;

// for文で、配列内すべてを出力する
console.log('以下for文');
for (i; i <= holidays.length - 1; i++) {
    console.log(holidays[i]);
}

i = 0;

console.log('');
console.log('以下While文');
// while文で、配列内すべてを出力する
while (i <= holidays.length - 1) {
    console.log(holidays[i]);
    i++;
}