// 给list里面的div添加动态效果
var list = document.querySelectorAll('.list div');
var Player;
(function (Player) {
    Player["X"] = "x";
    Player["O"] = "o";
})(Player || (Player = {}));
var current = Player.X;
// 定义判赢数组
var winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// 单元格列数
var cells = document.querySelectorAll('.list div');
// 游戏面板
var info = document.querySelector('.info');
// 提示信息
var myinfo = document.querySelector('.info h1');
var step = 0;
list.forEach(function (item) {
    item.addEventListener('click', divclick, { once: true });
    item.addEventListener('mouseover', mousediv);
    item.addEventListener('mouseleave', mouseleave);
});
// 点击事件
function divclick(e) {
    step++;
    e.target.classList.add(current);
    e.target.classList.remove('opacity');
    e.target.classList.add('active');
    // 调用判赢方法
    // true 赢
    if (checkwin(current)) {
        info.style.display = 'block';
        myinfo.innerHTML = "\u606D\u559C\u73A9\u5BB6".concat(current, "\u8D62\u4E86");
        return;
    }
    // 平局
    if (step == 9) {
        info.style.display = 'block';
        myinfo.innerHTML = "\u5E73\u5C40\u4E86";
        return;
    }
    current == Player.O ? current = Player.X : current = Player.O;
}
// 鼠标经过
function mousediv(e) {
    if (!e.target.classList.contains('active')) {
        e.target.classList.add('opacity');
        current ? e.target.classList.add(current) : e.target.classList.add(current);
    }
}
// 鼠标离开
function mouseleave(e) {
    if (!e.target.classList.contains('active')) {
        e.target.classList.remove('opacity');
        e.target.classList.remove(current);
    }
}
// 判赢函数
function checkwin(player) {
    return winArr.some(function (item) {
        // 如果单元格里包含player这个类
        if (cells[item[0]].classList.contains(player) &&
            cells[item[1]].classList.contains(player) &&
            cells[item[2]].classList.contains(player)) {
            return true;
        }
        return false;
    });
}
//当点击再来一次重新开始游戏
var btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    location.reload();
});
