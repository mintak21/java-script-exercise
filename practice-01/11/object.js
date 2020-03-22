const targetSeconds = 10;
const gameData = {
  startTime: null,
  dispArea: document.getElementById('disp-area'),
  start: function() {
    gameData.startTime = Date.now();
    document.body.onkeypress = this.stop.bind(this, gameData.startTime);
  },
  stop: function(startTime) {
    let result = null;
    const current = Date.now();
    const seconds = (current - startTime) / 1000;
    if (targetSeconds - 0.5 <= seconds && seconds <= targetSeconds + 0.5) {
      result = seconds + '秒でした。すごい。';
    } else {
      result = seconds + '秒でした。残念。';
    }
    gameData.dispArea.innerText = result;
  }
};

if (!confirm('OKを入力後に' + targetSeconds + '秒が経過したと思ったらキーを入力してください')) {
  console.log('キャンセルされました');
}
gameData.start();
