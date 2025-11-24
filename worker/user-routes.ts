import { Hono } from "hono";
import type { Env } from './core-utils';
import { UserEntity, ChatBoardEntity, LeadEntity, NewsletterEntity } from "./entities";
import { ok, bad, notFound, isStr } from './core-utils';
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  // DEMO ROUTES (from template)
  app.get('/api/users', async (c) => {
    await UserEntity.ensureSeed(c.env);
    const page = await UserEntity.list(c.env);
    return ok(c, page);
  });
  app.get('/api/chats', async (c) => {
    await ChatBoardEntity.ensureSeed(c.env);
    const page = await ChatBoardEntity.list(c.env);
    return ok(c, page);
  });
  app.get('/api/chats/:chatId/messages', async (c) => {
    const chat = new ChatBoardEntity(c.env, c.req.param('chatId'));
    if (!await chat.exists()) return notFound(c, 'chat not found');
    return ok(c, await chat.listMessages());
  });
  app.post('/api/chats/:chatId/messages', async (c) => {
    const chatId = c.req.param('chatId');
    const { userId, text } = (await c.req.json()) as { userId?: string; text?: string };
    if (!isStr(userId) || !text?.trim()) return bad(c, 'userId and text required');
    const chat = new ChatBoardEntity(c.env, chatId);
    if (!await chat.exists()) return notFound(c, 'chat not found');
    return ok(c, await chat.sendMessage(userId, text.trim()));
  });
  // YZ SANTRALIM ROUTES
  app.post('/api/leads', async (c) => {
    const { name, email, message, plan } = await c.req.json();
    if (!name || !email || !plan) return bad(c, 'Missing required fields: name, email, plan');
    const lead = await LeadEntity.create(c.env, {
      id: crypto.randomUUID(),
      name,
      email,
      message: message || '',
      plan,
      ts: Date.now(),
    });
    return ok(c, lead);
  });
  app.post('/api/newsletter', async (c) => {
    const { email } = await c.req.json();
    if (!email) return bad(c, 'Email is required');
    const subscriber = await NewsletterEntity.create(c.env, {
      id: crypto.randomUUID(),
      email,
      ts: Date.now(),
    });
    return ok(c, subscriber);
  });
}