module.exports = {
    getGreece: async (req, res) => {
        const db = req.app.get('db');

        db.countries.getGreece()
        .then( maps => res.status(200).send(maps))
        .catch(err => {res.status(500).send({errorMessage: 'Oops wrong doing is happening'})
        })
    },

getMexico: async (req, res) => {
    const db = req.app.get('db');

    db.countries.getMexico()
    .then( maps => res.status(200).send(maps))
    .catch(err => {res.status(500).send({errorMessage: 'Oops wrong doing is happening'})
    })
},
getRussia: async (req, res) => {
    const db = req.app.get('db');

    db.countries.getRussia()
    .then( maps => res.status(200).send(maps))
    .catch(err => {res.status(500).send({errorMessage: 'Oops wrong doing is happening'})
    })
},
getNigeria: async (req, res) => {
    const db = req.app.get('db');

    db.countries.getNigeria()
    .then( maps => res.status(200).send(maps))
    .catch(err => {res.status(500).send({errorMessage: 'Oops wrong doing is happening'})
    })
}

}