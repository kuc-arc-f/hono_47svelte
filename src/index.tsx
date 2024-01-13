import { Hono } from 'hono'
import { cors } from 'hono/cors'
import type { Database } from '@cloudflare/d1'
import { renderToString } from 'react-dom/server';
//
interface Env {
  DB: Database
}
//
const app = new Hono();
app.use("/*", cors());
//
import App from './pages/App';
//
app.get('/*', async (c) => { 
  return c.html(renderToString(App([])));
});

export default app
