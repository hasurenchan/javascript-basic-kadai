// ボタン要素取得
const btn = document.getElementById('btn');

// クリックイベント
btn.addEventListener('click', () => {
    // テキストの要素を取得
    const text = document.getElementById('text');

    // 2秒後にテキストを変更する
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
})