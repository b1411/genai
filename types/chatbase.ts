export type TChatbaseData = {
    messages: { content: string; role: "user" | "assistant" }[];
    chatbotId: string;
    stream: Boolean;
    temperature: number;
    conversationId?: string;
};
