let player = 1;
let tablecell;
let table = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]
let winconditions = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
]
function grid() {
    document.querySelector('#container').innerHTML = ""
    for (let i = 0; i < table.length; i++) {
        let container = document.querySelector('#container');
        let row = document.createElement('div')
        row.setAttribute('class', 'row')
        container.appendChild(row)
        for (let j = 0; j < table[i].length; j++) {
            let cell = document.createElement('div')
            cell.setAttribute('class', 'cell')
            cell.setAttribute('onclick', 'CLICK(this)')
            row.appendChild(cell)
        }
    }
}
function CLICK(elem) {
    if (player == 1) {
        elem.setAttribute('style', 'background-color: red;')
        movecolor()
        checkWin()
        player--
    } else if (player == 0) {
        elem.setAttribute('style', 'background-color: yellow;')
        movecolor()
        checkWin()
        player++
    }
}

function movecolor() {
    let move = window.setInterval(movecolor, 100)
    tablecell = [...document.getElementsByClassName('cell')]
    for (let i = 0; i < tablecell.length; i++) {
        if (tablecell[i + 7] && tablecell[i + 7].style.backgroundColor != "red" && tablecell[i + 7].style.backgroundColor != "yellow") {
            if (tablecell[i] && tablecell[i].style.backgroundColor == "red" && i < 35) {
                tablecell[i].removeAttribute('style', 'background-color: red;')
                tablecell[i + 7].setAttribute('style', 'background-color: red;')
                break;
            } else if (tablecell[i] && tablecell[i].style.backgroundColor == "yellow" && i < 35) {
                tablecell[i].removeAttribute('style', 'background-color: yellow;')
                tablecell[i + 7].setAttribute('style', 'background-color: yellow;')
                break;
            }
            window.clearInterval(move)
        }
    }
}
function checkWin() {
    for (let Y = 0; Y < 15; Y = Y + 7) {
        for (let X = 0; X < 3; X++) {
            let square = [tablecell[X + Y + 0], tablecell[X + Y + 1], tablecell[X + Y + 2], tablecell[X + Y + 3], tablecell[X + Y + 7], tablecell[X + Y + 8], tablecell[X + Y + 9], tablecell[X + Y + 10], tablecell[X + Y + 14], tablecell[X + Y + 15], tablecell[X + Y + 16], tablecell[X + Y + 17], tablecell[X + Y + 21], tablecell[X + Y + 22], tablecell[X + Y + 23], tablecell[X + Y + 24],];

            for (let i = 0; i < 10; i++) {
                if (square[winconditions[i][0]].style.backgroundColor == square[winconditions[i][1]].style.backgroundColor &&
                    square[winconditions[i][1]].style.backgroundColor == square[winconditions[i][2]].style.backgroundColor && 
                    square[winconditions[i][2]].style.backgroundColor == square[winconditions[i][3]].style.backgroundColor){
                        if (square[winconditions[i][0]].style.backgroundColor == 'red') {
                            document.querySelector('#gameStatus').innerHTML = 'Le joueur rouge a Gagné'
                            break;
                        }else if (square[winconditions[i][0]].style.backgroundColor == 'yellow') {
                            document.querySelector('#gameStatus').innerHTML = 'Le joueur jaune a Gagné'
                            break;
                        }
                }
            }
        }

    }
}
grid()