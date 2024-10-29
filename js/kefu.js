// 获取页面元素
var doc = document;
var dialogueInput = doc.getElementById('dialogue_input');
var dialogueContain = doc.getElementById('dialogue_contain');
var dialogueHint = doc.getElementById('dialogue_hint');
var btnOpen = doc.getElementById('btn_open');
var btnClose = doc.getElementById('btn_close');
var shiftKeyOn = false; // 辅助判断 shift 键是否按住
var timerId; // 声明 timerId 为数字类型

// 打开客服窗口的点击事件处理
btnOpen.addEventListener('click', function (e) {
    $('.dialogue-support-btn').css({ 'display': 'none' });
    $('.dialogue-main').css({ 'display': 'inline-block', 'height': '0' });
    $('.dialogue-main').animate({ 'height': '600px' });
});

// 关闭客服窗口的点击事件处理
btnClose.addEventListener('click', function (e) {
    $('.dialogue-main').animate({ 'height': '0' }, function () {
        $('.dialogue-main').css({ 'display': 'none' });
        $('.dialogue-support-btn').css({ 'display': 'inline-block' });
    });
});

// 输入框的按键按下事件处理
dialogueInput.addEventListener('keydown', function (e) {
    var e = e || window.event;
    if (e.keyCode === 16) {
        shiftKeyOn = true;
    }
    if (shiftKeyOn) {
        return true;
    } else if (e.keyCode === 13 && dialogueInput.value === '') {
        // console.log('发送内容不能为空');
        // 多次触发只执行最后一次渐隐
        setTimeout(function () {
            fadeIn(dialogueHint);
            clearTimeout(timerId);
            timerId = setTimeout(function () {
                fadeOut(dialogueHint);
            }, 1000);
        }, 10);
        return true;
    } else if (e.keyCode === 13) {
        var nodeP = doc.createElement('p');
        var nodeSpan = doc.createElement('span');
        nodeP.classList.add('dialogue-customer-contain');
        nodeSpan.classList.add('dialogue-text-customer', 'dialogue-customer-text');
        nodeSpan.innerHTML = dialogueInput.value;
        nodeP.appendChild(nodeSpan);
        dialogueContain.appendChild(nodeP);
        dialogueContain.scrollTop = dialogueContain.scrollHeight;
        submitCustomerText(dialogueInput.value);
    }
});

// 输入框的按键抬起事件处理
dialogueInput.addEventListener('keyup', function (e) {
    var e = e || window.event;
    if (e.keyCode === 16) {
        shiftKeyOn = false;
        return true;
    }
    if (!shiftKeyOn && e.keyCode === 13) {
        dialogueInput.value = null;
    }
});

// 提交用户输入的文本处理函数
function submitCustomerText(text) {
    // 处理问题选项回复
    if (text === 'A') {
        var nodeP = doc.createElement('p');
        var nodeSpan = doc.createElement('span');
        nodeP.classList.add('dialogue-service-contain');
        nodeSpan.classList.add('dialogue-text', 'dialogue-service-text');
        nodeSpan.innerHTML = '关于产品的详细信息，我们的产品具有高质量和独特的设计。';
        nodeP.appendChild(nodeSpan);
        dialogueContain.appendChild(nodeP);
        dialogueContain.scrollTop = dialogueContain.scrollHeight;
    } else if (text === 'B') {
        var nodeP = doc.createElement('p');
        var nodeSpan = doc.createElement('span');
        nodeP.classList.add('dialogue-service-contain');
        nodeSpan.classList.add('dialogue-text', 'dialogue-service-text');
        nodeSpan.innerHTML = '您的订单状态可以在个人中心的订单页面查看。';
        nodeP.appendChild(nodeSpan);
        dialogueContain.appendChild(nodeP);
        dialogueContain.scrollTop = dialogueContain.scrollHeight;
    } else if (text === 'C') {
        var nodeP = doc.createElement('p');
        var nodeSpan = doc.createElement('span');
        nodeP.classList.add('dialogue-service-contain');
        nodeSpan.classList.add('dialogue-text', 'dialogue-service-text');
        nodeSpan.innerHTML = '我们的售后服务包括7天无理由退换货和长期的技术支持。';
        nodeP.appendChild(nodeSpan);
        dialogueContain.appendChild(nodeP);
        dialogueContain.scrollTop = dialogueContain.scrollHeight;
    } else {
        // 判断输入是否为多个乱字母
        if (/^[a-zA-Z]+$/.test(text) && text.length > 3) {
            var nodeP = doc.createElement('p');
            var nodeSpan = doc.createElement('span');
            nodeP.classList.add('dialogue-service-contain');
            nodeSpan.classList.add('dialogue-text', 'dialogue-service-text');
            nodeSpan.innerHTML = '很抱歉，我不太理解您的意思，您可以重新提问哦。';
            nodeP.appendChild(nodeSpan);
            dialogueContain.appendChild(nodeP);
            dialogueContain.scrollTop = dialogueContain.scrollHeight;
        } else {
            var nodeP = doc.createElement('p');
            var nodeSpan = doc.createElement('span');
            nodeP.classList.add('dialogue-service-contain');
            nodeSpan.classList.add('dialogue-text', 'dialogue-service-text');
            nodeSpan.innerHTML = '模拟回复';
            nodeP.appendChild(nodeSpan);
            dialogueContain.appendChild(nodeP);
            dialogueContain.scrollTop = dialogueContain.scrollHeight;
        }
    }
}

// 渐隐函数
function fadeOut(obj) {
    var n = 100;
    var time = setInterval(function () {
        if (n > 0) {
            n -= 10;
            obj.style.opacity = '0.' + n;
        } else if (n <= 30) {
            obj.style.opacity = '0';
            clearInterval(time);
        }
    }, 10);
    return true;
}

// 渐显函数
function fadeIn(obj) {
    var n = 30;
    var time = setInterval(function () {
        if (n < 90) {
            n += 10;
            obj.style.opacity = '0.' + n;
        } else if (n >= 80) {
            obj.style.opacity = '1';
            clearInterval(time);
        }
    }, 100);
    return true;
}