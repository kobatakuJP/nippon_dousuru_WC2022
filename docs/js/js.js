function koushin(data) {
    const scores = data.current_score
    const japan = scores[0].score[0]
    const spain = scores[0].score[1]
    const costarica = scores[1].score[0]
    const german = scores[1].score[1]
    alert("japan" + japan + "spain" + spain + "costarica" + costarica + "german" + german)
    const msg = document.getElementById("yarukoto");
    msg.innerText = "現状維持！"
}

function getData() {
    fetch('./data.json')
        .then((response) => response.json())
        .then((data) => koushin(data));
}

function isBreak(jaS, spS, coS, geS) {
    const japan = {
        name: "japan",
        win: 3,
        point: 2,
        unpoint: 2,
        winfrom: ["germany"]
    }
    const spain = {
        name: "spain",
        win: 4,
        point: 8,
        unpoint: 1,
        winfrom: ["costarica"]
    }
    const costarica = {
        name: "costarica",
        win: 3,
        point: 1,
        unpoint: 7,
        winfrom: ["japan"]
    }
    const germany = {
        name: "germany",
        win: 1,
        point: 2,
        unpoint: 3
    }
    const a = jaS - spS === 0 ?
}

function isWin(a, b) {
    if (a.win > b.win) {
        return true;
    } else if (a.win === b.win) {
        if (a.point - a.unpoint > b.point - b.unpoint) {
            return true;
        } else if (a.point - a.unpoint === b.point - b.unpoint) {
            if (a.point > b.point) {
                return true;
            } else if (a.point === b.point) {
                return b.name.includes(a.winfrom)
            }
        }
    }
    return false

}

getData()