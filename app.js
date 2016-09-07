var express = require('express');
app = express();

PORT = 3300;

app.get('/', function(req, res) {

    console.log('Get no root!');

    res.status(200);
    res.json({
        type: true,
        data: "Ola amiguinhos!"
    });
});

app.listen(PORT, function(){

    console.log("Rodando na porta " + PORT);

});