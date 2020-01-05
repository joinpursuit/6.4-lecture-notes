const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    const people = [
        {name: "Corey"},
        {name: "Jon"}, 
        {name: "Jhenya"}
    ]

    const cats = [
        {name: "Hachiko"},
        {name: "Noboru"}
    ]

    console.log(req.url);
    if(req.url === "/people") {
        res.end(JSON.stringify(people));
    } else if(req.url === "/cats"){
        res.end(JSON.stringify(cats));
    }else {
        res.end("hello world")
    }
});

server.listen(port, () => {
    console.log("Server is running on port " + port);
} )