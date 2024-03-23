// To store message streaming controller

export const ChatControllerPool1 = {
  controllers: {} as Record<string, AbortController>,

  addController(
    sessionId: string,
    messageId: string,
    controller: AbortController,
  ) {
    const key = this.key(sessionId, messageId);
    this.controllers[key] = controller;
    return key;
  },

  stop(sessionId: string, messageId: string) {
    const key = this.key(sessionId, messageId);
    const controller = this.controllers[key];
    controller?.abort();
  },

  stopAll() {
    console.log("🚀 ~ stopAll ~ controllers:", this);

    Object.values(this.controllers).forEach((v) => {
      console.log("🚀 ~ Object.values ~ v:", v);
      return v.abort();
    });
  },

  hasPending() {
    return Object.values(this.controllers).length > 0;
  },

  remove(sessionId: string, messageId: string) {
    const key = this.key(sessionId, messageId);
    delete this.controllers[key];
  },

  key(sessionId: string, messageIndex: string) {
    return `${sessionId},${messageIndex}`;
  },
};
export class ChatControllerPool {
  private static instance: ChatControllerPool;
  public controllers: Record<string, AbortController> = {};

  private constructor() {}

  public static getInstance(): ChatControllerPool {
    if (!ChatControllerPool.instance) {
      ChatControllerPool.instance = new ChatControllerPool();
    }
    return ChatControllerPool.instance;
  }

  public addController(
    sessionId: string,
    messageId: string,
    controller: AbortController,
  ) {
    const key = this.key(sessionId, messageId);
    this.controllers[key] = controller;
    return key;
  }

  public stop(sessionId: string, messageId: string) {
    const key = this.key(sessionId, messageId);
    const controller = this.controllers[key];
    controller?.abort();
  }

  public stopAll() {
    console.log("🚀 ~ stopAll ~ controllers:", this.controllers);

    Object.values(this.controllers).forEach((v) => {
      console.log("🚀 ~ Object.values ~ v:", v);
      v.abort();
    });
  }

  public hasPending() {
    return Object.values(this.controllers).length > 0;
  }

  public remove(sessionId: string, messageId: string) {
    const key = this.key(sessionId, messageId);
    delete this.controllers[key];
  }

  private key(sessionId: string, messageIndex: string) {
    return `${sessionId},${messageIndex}`;
  }
}

export default ChatControllerPool1;
