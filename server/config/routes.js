var player=require('../controllers/players.js');
module.exports=function(app){
	app.get("/all", function(req, res){
		player.all(req, res);
	});
	app.post("/players", function(req, res){
		player.create(req, res);
	});
	app.put("/players/:id", function(req, res, ){
		player.update(req, res);
	});
	app.delete("/players/:id", function(req, res){
		player.destroy(req, res);
	});
	app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
	});
};