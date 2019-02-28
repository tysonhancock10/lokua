const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        
        console.log(req.data)
        const {username, password} = req.body
        const {session} = req;
        const db = req.app.get('db');
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.user.register({username: username, password: hash})
        newUser = newUser[0];
        session.user = {...newUser};
        res.status(201).send(session.user)

    },
    login: async (req, res) => {

        const {username, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        let user = await db.user.login({username: username});
        user = user[0]

        if (!user){
        res.sendStatus(400)}
        const foundUser = bcrypt.compareSync(password, user.password);
       
        if(foundUser){
            delete user.password
            session.user = user;
            res.status(200).send(session.user)
        }
        else {
            res.status(401).send('nope')
        }
    },
    getUser: (req, res) => {
        const {user} = req.session
        console.log({user})
        if (user) {
            res.status(200).send(user);
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}