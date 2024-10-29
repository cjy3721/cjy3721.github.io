/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-10-05 23:23:41
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-10-05 23:24:55
 * @FilePath: \臻品购物城\js\right_topb.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/* 快速跳转箭头 */
// 向上滚动到顶部的函数
document.getElementById('scroll-up').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 向下滚动到目标位置的函数（这里示例为滚动到页面底部）
document.getElementById('scroll-down').addEventListener('click', function () {
    // 可以根据实际需求修改滚动的目标位置
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});
