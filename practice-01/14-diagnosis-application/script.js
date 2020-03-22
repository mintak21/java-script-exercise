'use strict';

const answerTemplate = '{userName}さんがハマリそうなことは{answer}です。'
const answers = [
  '野球',
  'サッカー',
  'テレビ',
  'Youtube',
  '5Chan',
  'プログラミング',
  'スマホゲーム'
];

const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('diagnosis');
const resultArea = document.getElementById('result');
const tweetArea = document.getElementById('tweet');

/**
 * 診断結果文字列を返却
 * userNameの入力内容に応じて判定
 *
 * @param {string} userName ユーザー名称
 * @returns {string} 結果
 */
function selectAnswer(userName) {
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }

  const answer = answers[sumOfCharCode % answers.length];
  let result = answerTemplate;
  result = result.replace(/\{userName\}/g, userName);
  result = result.replace(/\{answer\}/g, answer);
  return result;
}

/**
 * 診断ボタンクリック時の挙動
 */
function onAssessmentButtonClick() {
  const userName = userNameInput.value;
  if (userName.length == 0) {
    return;
  }
  console.log('assessment button clicked. user name->'+ userName);
  let result = selectAnswer(userName);
  createResultArea(result);
  createTweetArea(result);
}

/**
 * 結果エリアの表示
 *
 * @param {string} result 診断結果文字列
 */
function createResultArea(result) {
  removeAllChiredren(resultArea);
  const header = document.createElement('h3');
  header.innerText = '診断結果';

  const paragraph = document.createElement('p');
  paragraph.innerText = result;

  resultArea.appendChild(header);
  resultArea.appendChild(paragraph);
}

/**
 * ツイートエリアの表示
 *
 * @param {string} result 診断結果文字列
 */
function createTweetArea(result) {
  removeAllChiredren(tweetArea);
  const anchor = document.createElement('a');
  const ref = 'https://twitter.com/intent/tweet?button_hashtag=' + encodeURIComponent('あなたのハマりそうなもの') + '&ref_src=twsrc%5Etfw';
  anchor.setAttribute('href', ref);
  anchor.className = 'twitter-hashtag-button';
  anchor.setAttribute('data-text', result);
  anchor.innerText = 'Tweet #あなたのハマりそうなもの';

  const script = document.createElement('script');
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js');

  tweetArea.appendChild(anchor);
  tweetArea.appendChild(script);
}

/**
 * 指定したHTML要素の子要素を全て削除
 * @param {HTMLElement} element HTML要素
 */
function removeAllChiredren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/**
 * コンポーネントのイベントをセットアップ
 */
function setupComponentEvent() {
  assessmentButton.onclick = onAssessmentButtonClick;
  userNameInput.onkeydown = (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    onAssessmentButtonClick();
  }
}

// main
setupComponentEvent();

// test codes
console.assert(
  selectAnswer('test') === 'testさんがハマリそうなことは野球です。', '診断結果テスト'
)
console.assert(
  selectAnswer('check') === selectAnswer('check'),
  '答えが一定であること'
)
