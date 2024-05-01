const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  let body = '';
  
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<meta name="fc:frame" content="vNext"/><meta name="fc:frame:image" content="https://stats-frame.degen.tips/api/images?page=STATS&signed=r_8642723041-610e55b7d312ee9cbbba8148504db2518062cc6c"/><meta name="og:image" content="https://stats-frame.degen.tips/api/images?page=STATS&signed=r_8642723041-610e55b7d312ee9cbbba8148504db2518062cc6c"/><meta name="fc:frame:image:aspect_ratio" content="1:1"/><meta name="fc:frame:button:1" content="Check my own stats"/><meta name="fc:frame:button:1:action" content="post"/><meta name="fc:frame:button:1:target" content="https://stats-frame.degen.tips/frames?__bi=1-p"/><meta name="frames.js:version" content="0.15.1"/>`);
    console.log(body);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
