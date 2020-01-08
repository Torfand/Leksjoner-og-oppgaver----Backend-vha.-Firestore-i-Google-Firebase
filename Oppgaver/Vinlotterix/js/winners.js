//view
const dayName = [
    'Søndag', 'Mandag', 'Tirsdag',
    'Onsdag', 'Torsdag', 'Fredag',
    'Lørdag'
]

function showDraws() {
    let html = '';
    let cssClass = 'firstDraw';
    for (let drawing of model.draws) {
        const time = new Date(drawing.time);
        const dateText = createDateTextToDisplay(time);
        const weekDay = dayName[time.getDay()];
        const winners = drawing.winners;
        const participants = drawing.participants;
        const winningWord = winners.length === 1 ? 'Vinneren' : 'Vinnere';

        html +=
            `<p>
                <small>${weekDay} ${dateText}</small><br/>
                <b class="${cssClass}">${winningWord} er ${createTextList(winners)}!</b><br/>
                <small>Trukket fra totalt ${participants.length} Personer : ${createTextList(participants)}</small>
            </p>`;
        cssClass = '';
    }
    document.getElementById('content').innerHTML = html;
}

function createTextList(list) {
    if(list.length === 0) return '';
    if(list.length === 1) return list[0];

    const textList = list.join(', ');
    const indexLastComma = textList.lastIndexOf(',')
    return textList.substr(0, indexLastComma)
        + ' og ' + textList.substr(indexLastComma + 1);
}