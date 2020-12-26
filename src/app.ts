const app = require("express")();
const { User } = require("./db/models");

app.get("/users", async (req: any, res: any) => {
	const users = await User.findAll();
	res.json(users);
});

app.listen(8081);
