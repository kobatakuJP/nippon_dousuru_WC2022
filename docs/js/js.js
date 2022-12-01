function koushin(data) {
    const scores = data.current_score
    const japan = scores[0].score[0]
    const spain = scores[0].score[1]
    const costarica = scores[1].score[0]
    const german = scores[1].score[1]
    alert("japan", japan, "spain", spain, "costarica", costarica, "german", german)
}

function getData() {
    fetch('./data.json')
        .then((response) => response.json())
        .then((data) => koushin(data));
}
getData()