export interface MsgListType {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ErrorMsg {
  code: string;
  message: string;
}
