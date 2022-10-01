import { Reply } from "./reply";

export interface Tweet {
    id: String;
    email: String;
    body: String;
    likes: number;
    timestamp: Date;
    replies: Reply[];
}
