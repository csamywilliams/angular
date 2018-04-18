import { Note } from '../Models/note';

export const NOTES: Note[] = [
    {
        id: 1,
        date: new Date(),
        author: "John Smith",
        subject: "Note 1",
        message: "This is the content for the first message"
    },
    {
        id: 2,
        date: new Date(),
        author: "Jane Doe",
        subject: "Note 2",
        message: "This is the content for the second message"
    }
];