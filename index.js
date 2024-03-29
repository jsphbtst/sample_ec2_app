const express = require('express');

const app = express();

app.use(express.static('client/build'));
const path = require('path');
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 80;
app.listen(PORT);
/*require('dns').lookup(require('os').hostname(), function (err, add, fam) {
	console.log('ADDRESS: '+ add + ':' + PORT);
});*/