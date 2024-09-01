import {databases} from "@/server/config";
import {db, questionCollection} from "@/server/name";
import {Permission} from "node-appwrite";

export const createQuestionCollection = async () => {
    await databases.createCollection(db, questionCollection, questionCollection, [
        Permission.read('any'),
        Permission.read('users'),
        Permission.create('users'),
        Permission.delete('users'),
    ]);

    console.log('Question collection created');
}