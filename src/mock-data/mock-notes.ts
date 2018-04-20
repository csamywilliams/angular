import { Note } from '../Models/note';

export const AUTHOR = "Amy Williams"

export const NOTES: Note[] = [
    {
        id: 1,
        date: Date.now(),
        author: "John Smith",
        subject: "Note 1",
        message: "This is the content for the first message",
        tag: true
    },
    {
        id: 2,
        date: Date.now(),
        author: "Jane Doe",
        subject: "Note 2",
        message: "This is the content for the second message",
        tag: false
    }
];