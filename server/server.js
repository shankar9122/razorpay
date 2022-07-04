const app = require("./app");

require("./config/databaseConnection");




app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`)
})