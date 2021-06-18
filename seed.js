const axios = require("axios");
const scraperDomain =
  process.env.SCRAPER_DOMAIN || "http://localhost:5000/schedule";

const arg = process.argv[2];

axios
  .get(`${scraperDomain}/${arg}`)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
