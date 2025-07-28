// 단어 데이터 (나중에 더 많은 단어를 추가할 수 있습니다.)
const words = [
    { english: "apple", korean: "사과" },
    { english: "house", korean: "집" },
    { english: "computer", korean: "컴퓨터" },
    { english: "book", korean: "책" },
    { english: "water", korean: "물" },
    { english: "friend", korean: "친구" },
    { english: "travel", korean: "여행" },
    { english: "music", korean: "음악" },
    { english: "happy", korean: "행복한" },
    { english: "dream", korean: "꿈" }
];

let currentWordIndex = 0;

// DOM 요소 가져오기
const englishWordElem = document.getElementById('english-word');
const koreanMeaningElem = document.getElementById('korean-meaning');
const showAnswerBtn = document.getElementById('show-answer-btn');
const nextWordBtn = document.getElementById('next-word-btn');

// 단어를 화면에 표시하는 함수
function displayWord() {
    const word = words[currentWordIndex];
    englishWordElem.textContent = word.english;
    koreanMeaningElem.textContent = word.korean;
    // 초기에는 한국어 뜻을 숨김
    koreanMeaningElem.classList.add('hidden-meaning');
}

// 정답을 보여주는 함수
function showAnswer() {
    koreanMeaningElem.classList.remove('hidden-meaning');
}

// 다음 단어로 넘어가는 함수
function nextWord() {
    currentWordIndex++;
    if (currentWordIndex >= words.length) {
        currentWordIndex = 0; // 모든 단어를 다 봤으면 처음으로 돌아감
    }
    displayWord();
}

// 이벤트 리스너 등록
showAnswerBtn.addEventListener('click', showAnswer);
nextWordBtn.addEventListener('click', nextWord);

// 페이지 로드 시 첫 단어 표시
document.addEventListener('DOMContentLoaded', displayWord);
