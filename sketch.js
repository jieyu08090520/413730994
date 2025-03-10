let input, slider, btnElement, colorPicker, dropdown, clearButton;
let randomValue = 0;
let iframe;

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  input.position((width - input.width) / 2, 10); // 將輸入框移到上方中間
  
  slider = createSlider(16, 50, 32); // 創建滑桿，範圍從10到100，初始值為32
  slider.position((width - slider.width) / 2.45, 10); // 將滑桿移到輸入框下方中間
  
  btnElement = createButton("來了"); // 創建按鈕
  btnElement.position((width - btnElement.width) / 1.78, 10); // 將按鈕移到滑桿下方中間
  btnElement.mousePressed(goCrazy); // 設定按鈕按下滑鼠執行的程式碼
  
  colorPicker = createColorPicker('#ed225d'); // 創建顏色選擇器，預設值為紅色
  colorPicker.position((width - colorPicker.width) / 1.7, 8); // 將顏色選擇器移到按鈕下方中間
  
  dropdown = createSelect(); // 創建下拉式選單
  dropdown.position((width - dropdown.width) / 1.64, 12); // 將下拉式選單移到顏色選擇器下方中間
  dropdown.option('淡江大學首頁');
  dropdown.option('第三周作品');
  dropdown.option('第三周講義');
  dropdown.option('第四周測驗卷');
  dropdown.option('第四周講義');
  dropdown.changed(openLink); // 設定選單改變時執行的程式碼
  
  clearButton = createButton('清除iFrame'); // 創建清除按鈕
  clearButton.position(dropdown.x + dropdown.width + 82, 10); // 將清除按鈕放在下拉式選單旁邊
  clearButton.mousePressed(clearIframe);
  
  iframe = createElement('iframe');
  iframe.position(100, 100);
  iframe.size(windowWidth - 200, windowHeight - 200);
  iframe.hide();
}

function draw() {
  background(0); // 背景改成黑色
  fill(colorPicker.value()); // 使用顏色選擇器的值來填充文字
  let txt = input.value();
  let textSizeValue = slider.value(); // 獲取滑桿的值
  textSize(textSizeValue);
  textAlign(LEFT, TOP);
  let y = 100; // 起始位置
  let xOffset = sin(frameCount * 0.1) * randomValue; // 隨著時間變化的水平偏移
  let yOffset = cos(frameCount * 0.1) * randomValue; // 隨著時間變化的垂直偏移
  while (y < height) {
    let x = 0;
    while (x < width) {
      text(txt, x + xOffset, y + yOffset);
      x += textWidth(txt) + 20; // 每句話之間有間隔
    }
    y += textSizeValue + 20; // 每句話之間有間隔
  }
}

function goCrazy() {
  if (randomValue > 0) {
    randomValue = 0;
  } else {
    randomValue = 2; // 輕微震動
  }
}

function openLink() {
  let selected = dropdown.value();
  iframe.show();
  if (selected === '淡江大學首頁') {
    iframe.attribute('src', 'https://www.tku.edu.tw/');
  } else if (selected === '第三周作品') {
    iframe.attribute('src', 'https://jieyu0809.github.io/0303/');
  } else if (selected === '第三周講義') {
    iframe.attribute('src', 'https://hackmd.io/@Jieyu0809/r1KWfFMiJl');
  } else if (selected === '第四周測驗卷') {
    iframe.attribute('src', 'https://jieyu08090520.github.io/250310/');
  } else if (selected === '第四周講義') {
    iframe.attribute('src', 'https://jieyu0809.github.io/0303/');
  }
}

function clearIframe() {
  iframe.hide();
  iframe.attribute('src', '');
}
