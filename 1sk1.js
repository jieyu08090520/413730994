let input;
let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  input.position((width - input.width) / 2, 10); // 將輸入框移到上方中間
  
  slider = createSlider(10, 50, 32); // 創建滑桿，範圍從28到50，初始值為32
  slider.position(input.x + input.width + 10, 10); // 將滑桿放在文字框的右側
}

function draw() {
  background(0); // 背景改成黑色
  fill(255); // 字體改成白色
  
  let txt = input.value();
  let txtSize = slider.value(); // 根據滑桿的值設置文字大小
  textSize(txtSize);
  textAlign(LEFT, TOP);
  let y = 50;
  while (y < height) {
    let x = 0;
    while (x < width) {
      text(txt, x, y);
      x += textWidth(txt) + 20; // 每句話之間有間隔
    }
    y += txtSize + 10; // 每句話之間有間隔，根據文字大小調整行高
  }
}
