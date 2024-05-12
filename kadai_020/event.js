// idから、HTML要素を取得
const btn = document.getElementById('btn');

// クリックイベント
btn.addEventListener('click', () => {
    // 文字列を変更するHTML要素の取得
    const label = document.getElementById('text');

    // テキストを変更
    label.textContent = 'ボタンをクリックしました';
});