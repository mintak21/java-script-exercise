function paragraph(birthTime) {
  const now = new Date()
  const seconds = (now.getTime() - birthTime.getTime()) / 1000
  return '生まれてから' + seconds + '秒が経過しています。'
}

function writeTag(elementId, birthTime) {
  document.getElementById(elementId).innerText = paragraph(birthTime)
}

const myBirthTime = new Date(1991, 4, 30)
const intervalMills = 500

// インターバル実行
// 関数側に引数を渡すには、bindを使うか、無名関数を定義しないと、定期実行されないらしい
setInterval(writeTag.bind(this, 'birth-param', myBirthTime), intervalMills)
