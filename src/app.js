const app = require("express")();

app.get("/", async (req, res) => {
	res.send("Hello World!");
});

app.listen(8081);
