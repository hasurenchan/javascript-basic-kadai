// インスタンス作成
const date = new Date();

const year = date.getFullYear() + '年';
// 0起点のため、+1する。
const month = date.getMonth() + 1 + '月';
const day = date.getDate() + '日';

// xxxx年yy月zz日
console.log(year + month + day);