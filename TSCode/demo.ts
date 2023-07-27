// 给list里面的div添加动态效果
let list = document.querySelectorAll('.list div')
enum Player {
    X = 'x',
    O = 'o'
}
let current = Player.X
// 定义判赢数组
let winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// 单元格列数
let cells = document.querySelectorAll('.list div')
// 游戏面板
let info = document.querySelector('.info') as HTMLDivElement
// 提示信息
let myinfo = document.querySelector('.info h1') as HTMLHeadingElement

let step = 0



list.forEach(item => {
    item.addEventListener('click', divclick, { once: true })
    item.addEventListener('mouseover', mousediv)
    item.addEventListener('mouseleave', mouseleave)
})


// 点击事件
function divclick(e) {
    step++
    e.target.classList.add(current)
    e.target.classList.remove('opacity')
    e.target.classList.add('active')
    // 调用判赢方法
    // true 赢
    if (checkwin(current)) {
        info.style.display = 'block'
        myinfo.innerHTML = `恭喜玩家${current}赢了`
        return
    }
    // 平局
    if (step == 9) {
        info.style.display = 'block'
        myinfo.innerHTML = `平局了`
        return
    }
    current == Player.O ? current = Player.X : current = Player.O
}

// 鼠标经过
function mousediv(e) {
    if (!e.target.classList.contains('active')) {
        e.target.classList.add('opacity')
        current ? e.target.classList.add(current) : e.target.classList.add(current)
    }
}

// 鼠标离开
function mouseleave(e) {
    if (!e.target.classList.contains('active')) {
        e.target.classList.remove('opacity')
        e.target.classList.remove(current)
    }
}


// 判赢函数
function checkwin(player) {
    return winArr.some(item => {
        // 如果单元格里包含player这个类
        if (cells[item[0]].classList.contains(player) &&
            cells[item[1]].classList.contains(player) &&
            cells[item[2]].classList.contains(player)) {
            return true
        }
        return false
    })
}

//当点击再来一次重新开始游戏
const btn = document.querySelector('#btn') as HTMLButtonElement
btn.addEventListener('click', () => {
    location.reload()
})























