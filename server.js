var app = require('express')();
app.use(app.static('app'));
app.listen(process.env.PORT);