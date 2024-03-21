import path from 'path';

export default function (app) {
    app.get('/', function (_, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    app.get('/notes', function (_, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
};