import { Note } from '../Models/note';

export const NOTES: Note[] = [
    {
        id: 1,
        date: new Date("Jan 25 2015"),
        author: "John Smith",
        subject: "Note 1",
        message: "This is the content for the first message",
        tag: true
    },
    {
        id: 2,
        date: new Date("March 05 2015"),
        author: "Jane Doe",
        subject: "Note 2",
        message: "This is the content for the second message",
        tag: false
    }
];