export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
// Minimal real-world chat example types (shared by frontend and worker)
export interface User {
  id: string;
  name: string;
}
export interface Chat {
  id: string;
  title: string;
}
export interface ChatMessage {
  id: string;
  chatId: string;
  userId: string;
  text: string;
  ts: number; // epoch millis
}
// YZ Santralım specific types
export interface Lead {
  id: string;
  name: string;
  email: string;
  message?: string;
  plan: string;
  ts: number;
}
export interface NewsletterSubscriber {
  id: string;
  email: string;
  ts: number;
}