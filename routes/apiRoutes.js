const db = require("../db/db.json");
const fs = require("fs");

let id = db.length + 1;

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(db);
    });
    
    app.post("/api/notes", function (req, res) {
        const newNote = req.body;
        newNote.id = id;
        id++;
        db.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(db), function (err) {
        if (err) throw err;
        res.json(db);
        });
    });
    
    app.delete("/api/notes/:id", function (req, res) {
        const deleteNote = req.params.id;
        for (let i = 0; i < db.length; i++) {
        if (db[i].id === parseInt(deleteNote)) {
            db.splice(i, 1);
        }
        }
        fs.writeFile("./db/db.json", JSON.stringify(db), function (err) {
        if (err) throw err;
        res.json(db);
        });
    });
    };

    