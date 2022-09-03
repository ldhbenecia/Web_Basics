const toDoList = document.querySelector('#to-do-list');

// 1. updateToDo 함수를 완성해 주세요.
function updateToDo(event) {
  if (event.target.classList.contains('item')) {
    event.target.classList.toggle('done');
  }
}

// 2. 각 li 태그가 아니라 하나의 태그에만 이벤트 핸들러를 등록해 주세요.
toDoList.addEventListener('click', updateToDo);

// 테스트 코드
const newToDo = document.createElement('li');
newToDo.textContent = '가계부 정리하기';
newToDo.classList.add('item');
toDoList.append(newToDo);

toDoList.children[2].addEventListener('click', function(e) {e.stopPropagation()});

// 마지막 줄에 의해서 세 번째 할 일에서는 이벤트 버블링이 일어나지 않기 때문에 클릭을 해도 아무런 이벤트 핸들러도 동작하지 않는 모습도 확인할 수가 있습니다.