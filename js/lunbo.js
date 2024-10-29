/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-10-05 23:21:19
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-10-05 23:21:24
 * @FilePath: \臻品购物城\js\lunbo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const bannerImg = document.querySelector('.banner_img');
const images = bannerImg.querySelectorAll('img');
const points = document.querySelectorAll('.point li');
const rightBtn = document.querySelector('.right');
const leftBtn = document.querySelector('.left');

let currentIndex = 0; // 当前显示图片的索引

// 自动轮播函数
function autoPlay() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateUI();
}

// 定时启动自动轮播
setInterval(autoPlay, 3000); // 每隔 3 秒切换一张图片

// 点击点切换图片
points.forEach((point, index) => {
    point.addEventListener('click', () => {
        currentIndex = index;
        updateUI();
    });
});

// 点击右键切换图片
rightBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateUI();
});

// 点击左键切换图片
leftBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateUI();
});

// 更新界面显示
function updateUI() {
    images.forEach((img, index) => {
        img.style.visibility = index === currentIndex ? 'visible' : 'hidden';
    });
    points.forEach((point, index) => {
        point.classList.toggle('active', index === currentIndex);
    });
}