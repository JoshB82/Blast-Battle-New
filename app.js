var
	gameport = 4004, // ??
	
	io			= require("socket.io"),
	express		= require("express"),
	UUID		= require("node-uuid"),
	
	verbose		= false,
	app			= express.createServer();
	
app.listen(gameport);

console.log("\t :: Express :: Listening on port "+gameport);

app.get("/",function(req,res) {
	res.sendFile("index.html");
});

