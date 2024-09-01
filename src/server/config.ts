import {Client, Databases, Avatars, Storage, Users} from "node-appwrite";
import {env} from "@/env";

const client = new Client()
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId)
    .setKey(env.appwrite.apikey);

const databases = new Databases(client);
const users = new Users(client);
const avatars = new Avatars(client);
const storage = new Storage(client);


export {client, databases, users, avatars, storage};
