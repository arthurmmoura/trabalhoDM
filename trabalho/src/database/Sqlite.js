//    "expo-sqlite": "~5.0.1",

import { SQLite } from "expo-sqlite";

const database_name = "ReactNative.db";
const database_version = "1.0";
const database_displayname = "SQLite React Offline Database";
const database_size = 200000;

export default class Sqlite {

    initDB() {
        db = SQLite.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size
          )

        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS ListaCompras (id integer primary key, name, quantidade, marca, img)');
        })
        
        return db;
    }


    closeDatabase(db) {
        if (db) {
            console.log("Closing DB");
            db.close()
        }  
    }

    listContents(db) {
        return new Promise((resolve)=> {

            const contents = [];

            db.transaction((tx) => {
              tx.executeSql('SELECT c.id, c.name, c.img, c.quantidade, c.marca FROM ListaCompras c',[],
                (_, { rows }) => {
                console.log("Retornou corretamente", rows);
                
                var len = rows.length;
                for (let i = 0; i < len; i++) {
                  let row = rows.item(i);
                  console.log(`ListaCompras ID: ${row.id}, ListaCompras Name: ${row.name}`);
                  
                  const { id, name, img, quantidade, marca } = row;
                  
                  contents.push({
                    id,
                    name,
                    img,
                    quantidade,
                    marca
                  });
                }

                console.log(contents);

                resolve(contents);
              });
            });



        })

    }

    addContent(content, db) {  
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO ListaCompras VALUES (null, ?, ?, ?, ?)', 
            [content.name, content.quantidade, content.marca, content.img],
            ()=>{console.log("sucesso")},
            ()=>{console.log("erro", content)})
        });  
    }

    updateContent(id, content, db) {
        db.transaction((tx) => {
            tx.executeSql('UPDATE ListaCompras SET name = ?, quantidade = ?, img = ?, marca = ? WHERE id = ?', 
            [content.name, content.quantidade, content.img, content.marca, id],
            ()=>{console.log("sucesso")},
            ()=>{console.log("erro", content)})
        }); 
    }

    deleteContent(id, db) {
        db.transaction((tx) => {
            tx.executeSql('DELETE FROM ListaCompras WHERE id = ?', 
            [id],
            ()=>{console.log("sucesso")},
            ()=>{console.log("erro", content)})
        }); 
    }

}