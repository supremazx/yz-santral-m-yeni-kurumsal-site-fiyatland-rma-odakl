import { IndexedEntity } from "./core-utils";
import type { User, Chat, ChatMessage, Lead, NewsletterSubscriber } from "@shared/types";
import { MOCK_CHAT_MESSAGES, MOCK_CHATS, MOCK_USERS } from "@shared/mock-data";
// USER ENTITY: one DO instance per user
export class UserEntity extends IndexedEntity<User> {
  static readonly entityName = "user";
  static readonly indexName = "users";
  static readonly initialState: User = { id: "", name: "" };
  static seedData = MOCK_USERS;
}
// CHAT BOARD ENTITY: one DO instance per chat board, stores its own messages
export type ChatBoardState = Chat & { messages: ChatMessage[] };
const SEED_CHAT_BOARDS: ChatBoardState[] = MOCK_CHATS.map(c => ({
  ...c,
  messages: MOCK_CHAT_MESSAGES.filter(m => m.chatId === c.id),
}));
export class ChatBoardEntity extends IndexedEntity<ChatBoardState> {
  static readonly entityName = "chat";
  static readonly indexName = "chats";
  static readonly initialState: ChatBoardState = { id: "", title: "", messages: [] };
  static seedData = SEED_CHAT_BOARDS;
  async listMessages(): Promise<ChatMessage[]> {
    const { messages } = await this.getState();
    return messages;
  }
  async sendMessage(userId: string, text: string): Promise<ChatMessage> {
    const msg: ChatMessage = { id: crypto.randomUUID(), chatId: this.id, userId, text, ts: Date.now() };
    await this.mutate(s => ({ ...s, messages: [...s.messages, msg] }));
    return msg;
  }
}
// LEAD ENTITY
export class LeadEntity extends IndexedEntity<Lead> {
  static readonly entityName = "lead";
  static readonly indexName = "leads";
  static readonly initialState: Lead = { id: "", name: "", email: "", plan: "", ts: 0 };
}
// NEWSLETTER SUBSCRIBER ENTITY
export class NewsletterEntity extends IndexedEntity<NewsletterSubscriber> {
  static readonly entityName = "newsletter";
  static readonly indexName = "newsletters";
  static readonly initialState: NewsletterSubscriber = { id: "", email: "", ts: 0 };
}