const response = await fetch(
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
