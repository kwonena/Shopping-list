const plus = document.querySelector("#plusBtn");

function inputText() {
  let text = document.querySelector("#textBox").value;
  let div = document.createElement("div", "listText");
  const listBox = document.querySelector(".listBox");

  // 텍스트 미입력시 입력하라는 경고창
  if (text.trim() == "") {
    alert("텍스트를 입력해 주세요!");
    return 0;
  }

  // 텍스트 입력시 리스트에 추가
  div.innerHTML = `
            <span class="list">
            ${text}<img src="./img/delete.png"
            onmouseover="this.src='./img/remove.png'"
            onmouseout="this.src='./img/delete.png'"
            class="trash" onclick="removeList();">
            </span>
        `;
  listBox.appendChild(div);
  document.querySelector("#textBox").value = "";
}

// plus 버튼 클릭시 텍스트 입력
plus.addEventListener("click", () => {
  inputText();
});

// 엔터키 클릭시 텍스트 입력
function pressEnter() {
  if (window.event.keyCode == 13) inputText();
}

// x버튼 이미지 클릭시 리스트 제거
function removeList() {
  let list = document.querySelector(".list");
  list.remove();
}
