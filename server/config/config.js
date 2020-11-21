// ==============================
// PRUERTO
// ==============================
process.env.PORT = process.env.PORT || 3000;

// ==============================
// ENTORNO
// ==============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'


// ==============================
// Base de datos
// ==============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://ahott2020:26719906Dama@cluster0.waz7w.mongodb.net/cafe?retryWrites=true&w=majority';
}

process.env.URLDB = urlDB;