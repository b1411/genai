export type TChatbaseData = {
    messages: { content: string; role: ("user" | "assistant") | string }[];
    chatbotId: string;
    stream: Boolean;
    temperature: number;
    conversationId?: string;
};
