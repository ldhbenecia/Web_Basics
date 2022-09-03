const flagBlue = document.querySelector('.flag-blue');
const flagWhite = document.querySelector('.flag-white');

function reset() {
  document.querySelector('.up').classList.remove('up');
}
// reset 함수를 만드는 목적은 setTimeOut으로 500초 뒤에 up 클래스를 초기화 하기 위해 생성

// 1. flagUp 함수를 완성해 주세요.
function flagUp(e) {
  if (e.button === 0) {
    flagBlue.classList.add('up');
  } else if (e.button === 2) {
    flagWhite.classList.add('up')
  }

  // 500 밀리초 뒤에 reset함수를 실행
  setTimeout(reset, 500);
}

// 2. 마우스 오른쪽 버튼 클릭시 나타나는 메뉴창을 막아주세요. 
document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

// 테스트 코드
document.addEventListener('mousedown', flagUp);