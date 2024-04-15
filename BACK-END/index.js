import express from "express";

const app = express();

app.get("/sync-users", async (req, res) => {
  try {
    // Importar node-fetch de forma dinámica
    const fetch = await import("node-fetch");

    const response = await fetch.default(
      "https://api.userfront.com/v0/tenants/xbpwd96n/users/5",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer uf_test_admin_xbpwd96n_c9a7bff77e3d3552fca270f56c9b50ea",
        },
      }
    );

    const userData = await response.json();
    console.log(userData);

    res.send(userData);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
