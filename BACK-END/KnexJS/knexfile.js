module.exports = {
  development: {
    client: "mysql", // Cambiamos el cliente a 'mysql'
    connection: {
      host: "localhost", // Cambiamos la configuración de conexión
      user: "tu_usuario_mysql", // Nombre de usuario de MySQL
      password: "tu_contraseña_mysql", // Contraseña de MySQL
      database: "tu_base_de_datos_mysql", // Nombre de la base de datos de MySQL
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
