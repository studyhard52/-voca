// Day별 단어 데이터
// 필요에 따라 Day를 추가하고 각 Day의 단어를 여기에 채워 넣으세요.
const wordsByDay = {
    'Day 1': [
        { english: "apple", korean: "사과" },
        { english: "house", korean: "집" },
        { english: "computer", korean: "컴퓨터" },
        { english: "book", korean: "책" },
        { english: "tree", korean: "나무" },
        { english: "water", korean: "물" },
        { english: "sun", korean: "태양" },
        { english: "moon", korean: "달" },
        { english: "star", korean: "별" },
        { english: "flower", korean: "꽃" },
        { english: "mountain", korean: "산" },
        { english: "river", korean: "강" },
        { english: "sky", korean: "하늘" },
        { english: "cloud", korean: "구름" },
        { english: "wind", korean: "바람" },
        { english: "rain", korean: "비" },
        { english: "snow", korean: "눈" },
        { english: "fire", korean: "불" },
        { english: "earth", korean: "지구" },
        { english: "city", korean: "도시" },
        { english: "road", korean: "길" },
        { english: "car", korean: "자동차" },
        { english: "bike", korean: "자전거" },
        { english: "train", korean: "기차" },
        { english: "plane", korean: "비행기" },
        { english: "ship", korean: "배" },
        { english: "bird", korean: "새" },
        { english: "fish", korean: "물고기" },
        { english: "dog", korean: "개" },
        { english: "cat", korean: "고양이" },
        { english: "friend", korean: "친구" },
        { english: "family", korean: "가족" },
        { english: "love", korean: "사랑" },
        { english: "hope", korean: "희망" },
        { english: "dream", korean: "꿈" },
        { english: "time", korean: "시간" },
        { english: "day", korean: "낮" },
        { english: "night", korean: "밤" },
        { english: "morning", korean: "아침" },
        { english: "evening", korean: "저녁" },
        { english: "food", korean: "음식" },
        { english: "drink", korean: "음료" },
        { english: "music", korean: "음악" },
        { english: "art", korean: "미술" },
        { english: "sport", korean: "스포츠" },
        { english: "game", korean: "게임" },
        { english: "school", korean: "학교" },
        { english: "work", korean: "일" },
        { english: "happy", korean: "행복한" },
        { english: "sad", korean: "슬픈" }
    ],
    'Day 2': [
        { english: "travel", korean: "여행하다" },
        { english: "learn", korean: "배우다" },
        { english: "teach", korean: "가르치다" },
        { english: "write", korean: "쓰다" },
        { english: "read", korean: "읽다" }
    ],
    // Day 3부터 Day 50까지 여기에 단어를 추가해주세요.
    // 'Day 3': [ ... ],
    // ...
    // 'Day 50': [ ... ]
};

let currentWords = []; // 현재 학습할 단어 목록
let currentWordIndex = 0;
let isMeaningHidden = true;

const modeSelectionScreen = document.getElementById('mode-selection-screen');
const daySelectionScreen = document.getElementById('day-selection-screen');
const wordLearningScreen = document.getElementById('word-learning-screen');
const dayList = document.getElementById('day-list');
const englishWordDisplay = document.getElementById('english-word');
const koreanMeaningDisplay = document.getElementById('korean-meaning');
const toggleMeaningBtn = document.getElementById('toggle-meaning-btn');
const nextWordBtn = document.getElementById('next-word-btn');
const currentDayTitle = document.getElementById('current-day-title');

// 초기 화면 설정
showScreen(modeSelectionScreen);

// 화면 전환 함수
function showScreen(screenToShow) {
    const screens = [modeSelectionScreen, daySelectionScreen, wordLearningScreen];
    screens.forEach(screen => {
        if (screen === screenToShow) {
            screen.classList.add('active');
        } else {
            screen.classList.remove('active');
        }
    });
}

// 모드 선택
function selectMode(mode) {
    if (mode === 'learning') {
        generateDayButtons();
        showScreen(daySelectionScreen);
    } else if (mode === 'memorization') {
        alert('암기 모드는 현재 준비 중입니다. 학습 모드를 이용해주세요!');
    }
}

// Day 버튼 동적 생성
function generateDayButtons() {
    dayList.innerHTML = ''; // 기존 버튼 제거
    for (let i = 1; i <= 50; i++) {
        const dayName = `Day ${i}`;
        const button = document.createElement('button');
        button.classList.add('day-button');
        button.textContent = dayName;
        button.onclick = () => selectDay(dayName);
        dayList.appendChild(button);
    }
}

// Day 선택
function selectDay(dayName) {
    currentWords = wordsByDay[dayName] || []; // 선택된 Day의 단어 로드
    if (currentWords.length === 0) {
        alert(`${dayName}의 단어가 아직 없습니다.`);
        return;
    }
    currentWordIndex = 0;
    currentDayTitle.textContent = `${dayName} 학습`; // Day 타이틀 업데이트
    loadWord();
    showScreen(wordLearningScreen);
}

// 단어 로드 및 표시
function loadWord() {
    if (currentWordIndex < currentWords.length) {
        const word = currentWords[currentWordIndex];
        englishWordDisplay.textContent = word.english;
        koreanMeaningDisplay.textContent = word.korean;
        hideMeaning(); // 새로운 단어 로드 시 뜻 숨기기
    } else {
        // 모든 단어 학습 완료
        alert('축하합니다! 모든 단어를 학습했습니다.');
        goBackToDaySelection(); // Day 선택 화면으로 돌아가기
    }
}

// 뜻 숨기기
function hideMeaning() {
    koreanMeaningDisplay.classList.add('hidden-meaning');
    isMeaningHidden = true;
    toggleMeaningBtn.textContent = '뜻 보기';
}

// 뜻 보이기
function showMeaning() {
    koreanMeaningDisplay.classList.remove('hidden-meaning');
    isMeaningHidden = false;
    toggleMeaningBtn.textContent = '뜻 숨기기';
}

// 뜻 토글
toggleMeaningBtn.addEventListener('click', () => {
    if (isMeaningHidden) {
        showMeaning();
    } else {
        hideMeaning();
    }
});

// 다음 단어
nextWordBtn.addEventListener('click', () => {
    currentWordIndex++;
    loadWord();
});

// Day 선택 화면으로 돌아가기
function goBackToDaySelection() {
    showScreen(daySelectionScreen);
    currentWords = []; // 현재 단어 목록 초기화
    currentWordIndex = 0;
}

// 모드 선택 화면으로 돌아가기
function goBackToModeSelection() {
    showScreen(modeSelectionScreen);
}

// (추가) 키보드 이벤트로 뜻 토글 및 다음 단어로 이동
document.addEventListener('keydown', (event) => {
    // 단어 학습 화면에서만 작동하도록
    if (wordLearningScreen.classList.contains('active')) {
        if (event.key === ' ' || event.key === 'Enter') { // 스페이스바 또는 엔터
            toggleMeaningBtn.click();
            event.preventDefault(); // 스페이스바의 기본 동작 (스크롤) 방지
        } else if (event.key === 'ArrowRight') { // 오른쪽 화살표
            nextWordBtn.click();
        }
    }
});
