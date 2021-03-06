module.exports = {
    register: async (req, res) => {
        // console.log(req.body)
        const { username, password } = req.body
        const db = req.app.get('db')


        let registerUsername = await db.register([username, password])

        registerUsername=registerUsername[0]
        res.status(200).send(registerUsername)
    },
    login: async ( req, res ) => {
        const { username, password } = req.body
        const db = req.app.get('db')
        
        let user = await db.login({username, password});
        user = user[0];
        if(!user){
            return res.sendStatus(401)
        }
        if(user.username == username && user.password == password){
            res.status(200).send(user)
            // console.log(user)
            
        }
    }
}