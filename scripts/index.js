const keyBoard = [
    {"enMode": "`", "enShitMode": "~", "ruMode": "ё", "ruShiftMode": "Ё", "size": "small", "row": 1, "color": "grey"},
    {"enMode": "1", "enShitMode": "!", "ruMode": "1", "ruShiftMode": "!", "size": "small", "row": 1, "color": "grey"},
    {"enMode": "2", "enShitMode": "@", "ruMode": "2", "ruShiftMode": '"', "size": "small", "row": 1, "color": "grey"},
    {"enMode": "3", "enShitMode": "#", "ruMode": "3", "ruShiftMode": "№", "size": "small", "row": 1, "color": "grey"},
    {"enMode": "4", "enShitMode": "$", "ruMode": "4", "ruShiftMode": "%", "size": "small", "row": 1, "color": "grey"},
    {"enMode": "5", "enShitMode": "%", "ruMode": "5", "ruShiftMode": ":", "size": "small", "row": 1, "color": "grey"},
    {"enMode": "6", "enShitMode": "^", "ruMode": "6", "ruShiftMode": ",", "size": "small", "row": 1, "color": "grey"},
    {"enMode": "7", "enShitMode": "&", "ruMode": "7", "ruShiftMode": ".", "size": "small", "row": 1, "color": "grey"},
    {"enMode": "8", "enShitMode": "*", "ruMode": "8", "ruShiftMode": ";", "size": "small", "row": 1, "color": "grey"},
    {"enMode": "9", "enShitMode": "(", "ruMode": "9", "ruShiftMode": "(", "size": "small", "row": 1, "color": "grey"},
    {"enMode": "0", "enShitMode": ")", "ruMode": "0", "ruShiftMode": ")", "size": "small", "row": 1, "color": "grey"},
    {"enMode": "-", "enShitMode": "_", "ruMode": "-", "ruShiftMode": "_", "size": "small", "row": 1, "color": "grey"},
    {"enMode": "=", "enShitMode": "+", "ruMode": "=", "ruShiftMode": "+", "size": "small", "row": 1, "color": "grey"},
    {"enMode": "Backspace", "enShitMode": "Backspace", "ruMode": "Backspace", "ruShiftMode": "Backspace", "size": "large", "row": 1, "color": "black"},

    {"enMode": "Tab", "enShitMode": "Tab", "ruMode": "Tab", "ruShiftMode": "Tab", "size": "large", "row": 2, "color": "black"},
    {"enMode": "q",   "enShitMode": "Q",   "ruMode": "й",   "ruShiftMode": "Й",   "size": "small", "row": 2, "color": "grey"},
    {"enMode": "w",   "enShitMode": "W",   "ruMode": "ц",   "ruShiftMode": "Ц",   "size": "small", "row": 2, "color": "grey"},
    {"enMode": "e",   "enShitMode": "E",   "ruMode": "у",   "ruShiftMode": "У",   "size": "small", "row": 2, "color": "grey"},
    {"enMode": "r",   "enShitMode": "R",   "ruMode": "к",   "ruShiftMode": "К",   "size": "small", "row": 2, "color": "grey"},
    {"enMode": "t",   "enShitMode": "T",   "ruMode": "е",   "ruShiftMode": "Е",   "size": "small", "row": 2, "color": "grey"},
    {"enMode": "y",   "enShitMode": "Y",   "ruMode": "н",   "ruShiftMode": "Н",   "size": "small", "row": 2, "color": "grey"},
    {"enMode": "u",   "enShitMode": "U",   "ruMode": "г",   "ruShiftMode": "Г",   "size": "small", "row": 2, "color": "grey"},
    {"enMode": "i",   "enShitMode": "I",   "ruMode": "ш",   "ruShiftMode": "Ш",   "size": "small", "row": 2, "color": "grey"},
    {"enMode": "o",   "enShitMode": "O",   "ruMode": "щ",   "ruShiftMode": "Щ",   "size": "small", "row": 2, "color": "grey"},
    {"enMode": "p",   "enShitMode": "P",   "ruMode": "з",   "ruShiftMode": "З",   "size": "small", "row": 2, "color": "grey"},
    {"enMode": "[",   "enShitMode": "{",   "ruMode": "х",   "ruShiftMode": "Х",   "size": "small", "row": 2, "color": "grey"},
    {"enMode": "]",   "enShitMode": "}",   "ruMode": "ъ",   "ruShiftMode": "Ъ",   "size": "small", "row": 2, "color": "grey"},
    {"enMode": "\\",  "enShitMode": "|",   "ruMode": "\\",  "ruShiftMode": "/",   "size": "small", "row": 2, "color": "grey"},
    {"enMode": "Del", "enShitMode": "Del", "ruMode": "Del", "ruShiftMode": "Del", "size": "large", "row": 2, "color": "black"},

    {"enMode": "CapsLock", "enShitMode": "CapsLock", "ruMode": "CapsLock", "ruShiftMode": "CapsLock", "size": "large", "row": 3, "color": "black"},
    {"enMode": "a",   "enShitMode": "A",   "ruMode": "ф",   "ruShiftMode": "Ф",   "size": "small", "row": 3, "color": "grey"},
    {"enMode": "s",   "enShitMode": "S",   "ruMode": "ы",   "ruShiftMode": "Ы",   "size": "small", "row": 3, "color": "grey"},
    {"enMode": "d",   "enShitMode": "D",   "ruMode": "в",   "ruShiftMode": "В",   "size": "small", "row": 3, "color": "grey"},
    {"enMode": "f",   "enShitMode": "F",   "ruMode": "а",   "ruShiftMode": "А",   "size": "small", "row": 3, "color": "grey"},
    {"enMode": "g",   "enShitMode": "G",   "ruMode": "п",   "ruShiftMode": "П",   "size": "small", "row": 3, "color": "grey"},
    {"enMode": "h",   "enShitMode": "H",   "ruMode": "р",   "ruShiftMode": "Р",   "size": "small", "row": 3, "color": "grey"},
    {"enMode": "j",   "enShitMode": "J",   "ruMode": "о",   "ruShiftMode": "О",   "size": "small", "row": 3, "color": "grey"},
    {"enMode": "k",   "enShitMode": "K",   "ruMode": "л",   "ruShiftMode": "Л",   "size": "small", "row": 3, "color": "grey"},
    {"enMode": "l",   "enShitMode": "L",   "ruMode": "д",   "ruShiftMode": "Д",   "size": "small", "row": 3, "color": "grey"},
    {"enMode": ";",   "enShitMode": ":",   "ruMode": "ж",   "ruShiftMode": "Ж",   "size": "small", "row": 3, "color": "grey"},
    {"enMode": "'",   "enShitMode": '"',   "ruMode": "э",   "ruShiftMode": "Э",   "size": "small", "row": 3, "color": "grey"},
    {"enMode": "Enter", "enShitMode": "Enter", "ruMode": "Enter", "ruShiftMode": "Enter", "size": "large", "row": 3, "color": "black"},

    {"enMode": "Shift", "enShitMode": "Shift", "ruMode": "Shift", "ruShiftMode": "Shift", "size": "large", "row": 4, "color": "black"},
    {"enMode": "z",   "enShitMode": "Z",   "ruMode": "я",   "ruShiftMode": "Я",   "size": "small", "row": 4, "color": "grey"},
    {"enMode": "x",   "enShitMode": "X",   "ruMode": "ч",   "ruShiftMode": "Ч",   "size": "small", "row": 4, "color": "grey"},
    {"enMode": "c",   "enShitMode": "C",   "ruMode": "с",   "ruShiftMode": "С",   "size": "small", "row": 4, "color": "grey"},
    {"enMode": "v",   "enShitMode": "V",   "ruMode": "м",   "ruShiftMode": "М",   "size": "small", "row": 4, "color": "grey"},
    {"enMode": "b",   "enShitMode": "B",   "ruMode": "и",   "ruShiftMode": "И",   "size": "small", "row": 4, "color": "grey"},
    {"enMode": "n",   "enShitMode": "N",   "ruMode": "т",   "ruShiftMode": "Т",   "size": "small", "row": 4, "color": "grey"},
    {"enMode": "m",   "enShitMode": "M",   "ruMode": "ь",   "ruShiftMode": "Ь",   "size": "small", "row": 4, "color": "grey"},
    {"enMode": ",",   "enShitMode": "<",   "ruMode": "б",   "ruShiftMode": "Б",   "size": "small", "row": 4, "color": "grey"},
    {"enMode": ".",   "enShitMode": ">",   "ruMode": "ю",   "ruShiftMode": "Ю",   "size": "small", "row": 4, "color": "grey"},
    {"enMode": "/",   "enShitMode": "?",   "ruMode": ".",   "ruShiftMode": ",",   "size": "small", "row": 4, "color": "grey"},
    {"enMode": "▲",   "enShitMode": '▲',   "ruMode": "▲",   "ruShiftMode": "▲",   "size": "small", "row": 4, "color": "black"},
    {"enMode": "Shift", "enShitMode": "Shift", "ruMode": "Shift", "ruShiftMode": "Shift", "size": "large", "row": 4, "color": "black"},

    {"enMode": "Ctr", "enShitMode": "Ctr", "ruMode": "Ctr", "ruShiftMode": "Ctr", "size": "large",    "row": 5, "color": "black"},
    {"enMode": "Win", "enShitMode": "Win", "ruMode": "Win", "ruShiftMode": "Win", "size": "large",    "row": 5, "color": "black"},
    {"enMode": "Alt", "enShitMode": "Alt", "ruMode": "Alt", "ruShiftMode": "Alt", "size": "large",    "row": 5, "color": "black"},
    {"enMode": "",    "enShitMode": "",    "ruMode": "",    "ruShiftMode": "",    "size": "max-size", "row": 5, "color": "black"},
    {"enMode": "Alt", "enShitMode": "Alt", "ruMode": "Alt", "ruShiftMode": "Alt", "size": "large",    "row": 5, "color": "black"},
    {"enMode": "◄",   "enShitMode": "◄",   "ruMode": "◄",   "ruShiftMode": "◄",   "size": "small",    "row": 5, "color": "black"},
    {"enMode": "▼",   "enShitMode": "▼",   "ruMode": "▼",   "ruShiftMode": "▼",   "size": "small",    "row": 5, "color": "black"},
    {"enMode": "►",   "enShitMode": "►",   "ruMode": "►",   "ruShiftMode": "►",   "size": "small",    "row": 5, "color": "black"},
    {"enMode": "Ctr", "enShitMode": "Ctr", "ruMode": "Ctr", "ruShiftMode": "Ctr", "size": "large",    "row": 5, "color": "black"}
];

const body = document.querySelector("body");

function init() {
    let keyBoardStr = '';
    let currentRow = 0;

    keyBoardStr += `<main>
                      <section>
                        <textarea rows="5" cols="50"></textarea>
                        <div class="keyboard">
                          <div class="keyboard__wrapper">`;

    keyBoard.forEach((item, index) => {
        
        if (item.row != currentRow) {
            keyBoardStr += `<div class="keyboard__row">`;
        }

        keyBoardStr += `<div class="keyboard__item">
                          <span class="keyboard__item_en">
                            <span class="item letter-mode ${item.size} ${item.color}">
                              ${item.enMode}
                            </span>
                            <span class="item ${item.size} ${item.color} shift-mode hidden">
                              ${item.enShitMode}
                            </span>
                          </span>
                          <span class="keyboard__item_ru hidden">
                            <span class="item hidden ${item.size} ${item.color}">
                              ${item.ruMode}
                            </span>
                            <span class="item shift-mode hidden ${item.size} ${item.color}">
                              ${item.ruShiftMode}
                            </span>
                          </span>
                        </div>`;
                        
        currentRow = item.row;

        if (keyBoard[index+1] == undefined || keyBoard[index+1].row != item.row) {
            keyBoardStr += `</div>`;
        }
    });
    
    keyBoardStr += `</div></div></section></main>`;
    body.innerHTML = keyBoardStr;
    addMouseEvent();
}

function mouseKeyPress(event) {
    if (event.target.classList.contains("toggle")) {
        event.target.classList.remove("toggle");
    } else {
        event.target.classList.add("toggle");
    }

    checkKeyValue(event.target);
    
}

function mouseKeyDown(event) {
    if (event.target.classList.contains("toggle")) {
        event.target.classList.remove("toggle");
    } else {
        event.target.classList.add("toggle");
    }
}

function addMouseEvent() {
    const keyElements = document.querySelectorAll("span.item");

    keyElements.forEach(item => {
        item.addEventListener("mouseup", mouseKeyPress);
        item.addEventListener("mousedown", mouseKeyDown);
        document.querySelector("textarea").focus();
        document.querySelector("textarea").addEventListener("keyup", keyPress);
    });

}

function keyPress(event) {
    console.log(event);
}

function checkKeyValue(element) {
    const textarea = document.querySelector("textarea");
    if (element.innerHTML.trim() == "Tab") {
        insertText(textarea, "    ");
    } else if (element.innerHTML.trim() == "Backspace" && textarea.value.length > 0) {
        insertText(textarea, element.innerHTML.trim());
    } else if (element.innerHTML.trim() == "▼" || element.innerHTML.trim() == "►" ||
               element.innerHTML.trim() == "◄" || element.innerHTML.trim() == "▲") {
        insertTextArrows(textarea, element.innerHTML.trim());
    } else if (element.innerHTML.trim() == "CapsLock") {
        chageKeyBoardToUpperCase();
    } else if (element.innerHTML.trim() != "Ctr"         && element.innerHTML.trim() != "Alt" &&
               element.innerHTML.trim() != "Win" &&
               element.innerHTML.trim() != "Shift"       && element.innerHTML.trim() != "Del" &&
               element.innerHTML.trim() != "Enter"       && element.innerHTML.trim() != ""    &&
               element.innerHTML.trim() != "Backspace")
    {
        insertText(textarea, element.innerHTML.trim());
    }
}

function insertText(textarea, text) {
    let endIndex;
    textarea.focus();

    if (typeof textarea.selectionStart == "number" && typeof textarea.selectionEnd == "number") {
        endIndex = textarea.selectionEnd;
        
        if (text == 'Backspace') {
            textarea.value = textarea.value.slice(0, textarea.selectionStart - 1) + textarea.value.substring(textarea.selectionStart);
            textarea.selectionEnd = textarea.selectionStart;
        } else {
            textarea.value = textarea.value.slice(0, endIndex) + text + textarea.value.slice(endIndex);
            textarea.selectionStart = textarea.selectionEnd = endIndex + text.length;
        }

    }
}

function insertTextArrows(textarea, text) {
    textarea.focus();
    if (text == '◄' && textarea.selectionStart != 0) {
        textarea.selectionEnd -= 1;
    } else if (text == '►' && textarea.value.length > 0) {
        textarea.selectionStart += 1;
    }
}

function chageKeyBoardToUpperCase() {
    const allEnKey = document.querySelectorAll('.keyboard__item_en');

    allEnKey.forEach(item => {
        item.querySelector('.letter-mode').classList.toggle('hidden');
        item.querySelector('.shift-mode').classList.toggle('hidden');

        if (item.querySelector('.letter-mode').innerHTML.trim() == 'CapsLock' || item.querySelector('.shift-mode').innerHTML.trim() == 'CapsLock') {
            item.querySelector('.letter-mode').classList.toggle('toggle');
            item.querySelector('.shift-mode').classList.toggle('toggle');
        }
    });
}

init();