import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
// import FileSync from 'lowdb/adapters/FileSync';
// const FileSync = require('lowdb/adapters/FileSync')

var db;
export const createConnection = () => {
    db = new LowSync(new JSONFileSync('db.json'))
    db.read()
    if(!db.data){
        db.data = { users: [] }
        db.write()
    }
    // db.defaults({ users: []}).write();
    // db.defaults({ categories: []}).write();
    // db.defaults({ items: []}).write();
    // db.defaults({ orders: []}).write();
}

export const getConnection = () => db;