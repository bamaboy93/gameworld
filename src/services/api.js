import axios from "axios";

// const API_KEY = "24c8fd4deb244804ae42924037cead51";

const API_KEY = "57264715f6d3488eba384435f8b8f7d4";

axios
  .get(`https://api.rawg.io/api/games?key=${API_KEY}`, {})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

axios
  .get(
    `https://api.rawg.io/api/games?key=${API_KEY}&dates=2023-02-01,2023-02-28`,
    {}
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
