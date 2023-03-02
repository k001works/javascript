// 定数
const NUM_COUNT_MAX = 50;   // カウント最大値
const NUM_LOOP_COUNT = 10;  // ループカウント確認用
const NUM_MULTIPLE = 4;     // 倍数確認用

// onloadイベント
window.onload = function() {
  // クリックイベントをリスナー登録
  const button = document.getElementById("countButton");
  button.addEventListener("click", function() {

    // カウント用ループ
    for (let i = 1; i <= NUM_COUNT_MAX; i++) {
      // ループカウント確認
      if (i % NUM_LOOP_COUNT == 0) {
        console.log("今 " + i + " 回ループしました。");
      }
      // 割れる数確認(倍数確認)
      if (i % NUM_MULTIPLE == 0) {
        console.log(NUM_MULTIPLE + "で割れる数です。 " + i);
      }
      // カウント終了確認
      if (i == NUM_COUNT_MAX) {
        console.log(NUM_COUNT_MAX + "回カウントが終わりました。");
      }
    }
  });
};