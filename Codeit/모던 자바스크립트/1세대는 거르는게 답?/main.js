// 여기에 코드를 작성해 주세요.
function ignoreFirst(...rest) {
  rest.shift();

  for (const el of rest) {
    console.log(el);
  }
}

ignoreFirst('1세대', '2세대', '3세대');
ignoreFirst('곰팡이', '강아지', '고양이');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);