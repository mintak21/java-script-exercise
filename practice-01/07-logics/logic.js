const youngPrice = 800
const memberPrice = 1000
const basicPrice = 1800

const age = 16
const isPointMember = true
let result = null // これはなくてもいい模様

// 判定部分
if (age <= 15) {
  result = youngPrice
} else if (isPointMember) {
  result = memberPrice
} else {
  result = basicPrice
}
document.write(result)

console.log('料金計算が完了しました。')
