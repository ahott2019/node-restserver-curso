// ==============================
// PRUERTO
// ==============================
process.env.PORT = process.env.PORT || 3000;

// ==============================
// ENTORNO
// ==============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// ==============================
// Vencimiento del Token
// ==============================
// 60 seguntos x 60 minutos x 24 hrs x 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// ==============================
// SEED de autenticacion
// ==============================
process.env.SEED = process.env.SEED || 'esta-es-el-seed-desarrollo';


// ==============================
// Base de datos
// ==============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// ==============================
// Google Client ID
// ==============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '1031527929841-djj3utb6gah55m2tfklpm6pgfknt0tk7.apps.googleusercontent.com';