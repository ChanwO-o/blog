const express = require('express')
const app = express()

app.route('/api/cats/:name').get((req, res) => {
	const requestedCatName = req.params['name']
	res.send({ name: requestedCatName })
})


const PORT = 8080 // process.env.PORT; // replace this on production
app.listen(PORT, () => {
	console.log('Server started!')
})
