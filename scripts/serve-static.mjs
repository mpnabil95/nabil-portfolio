import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('out');
const port=Number(process.env.PORT || 3000);
const basePath=(process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/,'');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.txt':'text/plain; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.pdf':'application/pdf','.woff2':'font/woff2','.ico':'image/x-icon'};
try {await stat(path.join(root,'index.html'));} catch {console.error('Run pnpm build before pnpm start.');process.exit(1);}
createServer(async(req,res)=>{
 try {
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{'Allow':'GET, HEAD'});res.end();return;}
  let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  if(basePath){if(pathname!==basePath&&!pathname.startsWith(basePath+'/')){res.writeHead(404);res.end('Not found');return;}pathname=pathname.slice(basePath.length)||'/';}
  let file=path.resolve(root,'.'+pathname);
  if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);res.end('Forbidden');return;}
  try {if((await stat(file)).isDirectory())file=path.join(file,'index.html');}catch{}
  let data;
  try {data=await readFile(file);}catch {file=path.join(root,'404.html');data=await readFile(file);res.statusCode=404;}
  res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');
  res.setHeader('X-Content-Type-Options','nosniff');
  res.end(req.method==='HEAD'?undefined:data);
 }catch {res.writeHead(400);res.end('Bad request');}
}).listen(port,'127.0.0.1',()=>console.log(`Portfolio: http://localhost:${port}${basePath}/`));
