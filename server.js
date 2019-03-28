let http = require('http');
var app = require('./app');

const PORT = process.env.PORT || 3000

http.createServer(app.handleRequest).listen(PORT, (error) => {
	if (error)
		return console.log(error)
  console.log(`Server is listening on PORT ${PORT} CNTL-C to quit`)
})
