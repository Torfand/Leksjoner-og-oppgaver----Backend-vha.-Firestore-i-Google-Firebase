//view
function showPeople() {
    let html = `<table>
        <tr>
            <td><input type="checkbox" onclick="chooseAllOrNone(this.checked)"
            ${createHTMLchecked(model.person.chooseFromAll)}/></td>
            <td>Personer</td>
            <td>
            <!--<button class="smallButton" onclick="editPeople()">✎</button>-->
            </td>
        </tr>`;
    for (let persons of model.person.list) {
        html += `
            <tr>
                <td><input type="checkbox"
                onclick="choosePerson(${persons.id})"/></td>
            <td>${persons.name}</td>
            <td><button class="smallButton" onclick = "deletePerson(${persons.id})">x</button></td>
            </tr>`
    }
    html += `<tr>
            <td></td>
            <td colspan="3">
                <input size="6" type="text" id="newPerson" />
                <button class="smallButton" onclick ="addPerson()>Legg til Person!</button>
            </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
            <td colspan="3">
                <button class="button" onclick="draw()">Trekk!</button
                <input type="number" size="1" value="${model.person.drawAmount}" 
                    onchange="model.person.drawAmount = parseInt(this.value)"/>
                <button class="" onclick="editAmount(1)">▲</button>
                <button class="" onlclick="editAmount(-1)">▼</button>
            </td>
        </tr>
    </table>`;
    document.getElementById("content").innerHTML = html;
}

function createHTMLchecked(chosen) {
    return chosen ? 'checked="checked"' : '';

}
//controller
function chooseAllOrNone(all) {
    model.person.chooseFromAll = all;
    for (let persons of model.person.list) {
        persons.isChosen = all;
    }
    showPeople();
}

function addPerson() {
    const name = document.getElementById('newPerson').value
    const id = model.person.list.map(p => p.id).reduce((max, value) => Math.max(max, value), -1) + 1;
    model.person.list.push({
        id: id, name: name, isChosen: true
    })
    showPeople();
}
function choosePerson(id) {
    const persons = findPerson(id);
    persons.isChosen = !persons.isChosen;
    showPeople();
}

function deletePerson(id) {
    model.person.list = model.person.list.filter(p => p.id !== id);
    showPeople();
}

function draw() {
    let number = model.person.drawAmount;
    const personList = model.person.list.filter(p => p.isChosen)
    const indexses = Array.from(personList.keys());
    const winners = [];
    while (number-- > 0 && indexses.length > 0) {
        const randomIndex = Math.floor(Math.random() * indexses.length);
        const index = indexses.splice(randomIndex, 1);
        winners.push(personList[index].name)
    }
    model.draws.unshift({
        winners: winners,
        time: createDateTextNowForStorage(),
        participants: personList.map(p => p.name)
    });
    showDraws();
}

function editAmount(delta) {
    model.person.drawAmount =
        Math.max(1, model.person.drawAmount + delta);
    showPeople();
}

function findPerson(id) {
    return model.person.list.filter(p => p.id === id)[0];
}