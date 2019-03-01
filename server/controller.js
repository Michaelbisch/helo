module.exports = {
    register: async (req, res) => {
        console.log(req.body)
        const { username, password } = req.body
        const db = req.app.get('db')


        let registerUsername = await db.register([username, password])

        registerUsername=registerUsername[0]
        res.status(200).send(registerUsername)
    }
}