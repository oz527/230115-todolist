const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

// 사진을 배경이미지로 넣고 싶다면
// img {
// position:absolute;
// width:100%;
// height:100%;
// left: 0px;
// top: 0px;
// right:0px;
// bottom:0px;
// z-index: -1;
// opacity:80%;
// }
// 설정 하시면 됩니다.
// opacity는 취향대로 하시면 되고
// z-index는 text의 z-index 보다 낮으면
// 뒷 배경으로 설정 됩니다.

// -------------------------------------------

// jinhong09241 year ago
// appendChild를 사용할 때 body에 넣고 싶은 위치에
// 정확히 넣으려면 어떻게 하나요?
// 영상에서만 봤을 때는 맨 마지막에 들어가는 것 같은데,
// 중간에 태그를 넣고싶은 경우는 어떻게 하나요?

// andongju9231 year ago
// @jinhong0924
// insertBefore() 메소드를 사용하시면 됩니다
// 이 메소드는 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입합니다.
// const h2 = document.querySelector("#clock")
// document.body.insertBefore(bgImage, h2);
// 두개의 인자중에 앞의 bgImage는 새로운 노드
// 즉 추가하고 싶은 노드이고 h2는 참조할 노드입니다.
// 즉 이렇게 코드를 짜시면 h2요소 앞에 bgImage가 추가되게 됩니다.
