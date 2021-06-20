import { createServer } from 'http';
import { readFileSync } from 'fs';

const hostname = '127.0.0.1';
const port = 3000;
const home = readFileSync('html/web.html')
const about = readFileSync('./about.html')
const services = readFileSync('./services.html')
const contact = readFileSync('./contact.html')

const server = createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about'){
        res.end(about);
    }
    else if(url == '/services'){
        res.end(services);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
