const express = require('express')
const app = express()



const PORT = 8080; // process.env.PORT; // replace this on production
app.listen(PORT, () => {
	console.log('Server started!')
})
