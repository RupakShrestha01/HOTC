import { $fetch } from 'ohmyfetch'
import type {IncomingMessage, ServerResponse} from "http";
import * as url from "url"
export default async (req: IncomingMessage, res: ServerResponse) => {
    const queryObject = url.parse(req.url as string, true).query;
    console.log(queryObject);
    let data = { data: [{ data: "" }] };
  
    const { page } = queryObject;
    if (page) {

      data = await $fetch(`http://127.0.0.1:8000/news/?page=${page}`);
    }
  
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
}