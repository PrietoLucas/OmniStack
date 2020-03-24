const express = require('express');

const app = express();

app.get('', (request, response) => {
    return response.json({
        evento: 'Semana OminiStack11',
        aluno: 'Lucas Prieto de Senna'
    })
});

app.listen(3333);