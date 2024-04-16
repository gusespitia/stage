module.exports = {
  development: {
    client: "mysql", // Cambiamos el cliente a 'mysql'
    connection: {
      host: "ID396978_reactApp.db.webhosting.be", // Cambiamos la configuración de conexión
      user: "ID396978_reactApp", // Nombre de usuario de MySQL
      password: "k0Rk95Aq022945918312", // Contraseña de MySQL
      database: "ID396978_reactApp", // Nombre de la base de datos de MySQL
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },
  production: {
    client: "mysql", // Cambiamos el cliente a 'mysql'
    connection: process.env.DATABASE_URL, // Aquí puedes mantener la variable de entorno si estás utilizando alguna herramienta de aprovisionamiento como Heroku
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds/production",
    },
  },
};
