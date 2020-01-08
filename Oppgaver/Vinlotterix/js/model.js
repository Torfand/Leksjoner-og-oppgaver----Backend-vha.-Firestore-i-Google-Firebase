var model = {
    person: {
        chooseFromAll: false,
        drawAmount: 1,
        list: [
            { id: 100, name: 'Per', isChosen: true },
            { id: 101, name: 'Pål', isChosen: true },
            { id: 102, name: 'Espen', isChosen: false },
            { id: 103, name: 'Ole', isChosen: true },
        ]
    },

    draws: [
        {
            winners: ['Ole'],
            time: '2018-10-17 17:10',
            participants: ['Per', 'Pål', 'Ole']
        }
        , {
            winners: ['Per', 'Pål', 'Knut'],
            time: '2018-10-11 17:10',
            participants: ['Per', 'Pål', 'Ole', 'Knut', 'Gunnar']
        }
    ]







};