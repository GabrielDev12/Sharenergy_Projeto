import { Schema, Model, model, connection } from 'mongoose';

export type UserType = {
    name: string,
    email: string,
    address: {
        street: string,
        neighborhood: string,
        number: string,
        state: string,
        country: string,
        city: string
    },
    CPF: string,
    PhoneNumber: string
}

const schema = new Schema<UserType>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: {
        street: String,
        neighborhood: String,
        number: String,
        state: String,
        country: String,
        city: String
    },
    CPF: { type: String },
    PhoneNumber: { type: String }
});

const modelName: string = 'Users';

const userModel = connection && connection.models[modelName]
    ? (connection.models[modelName] as Model<UserType>)
    : model<UserType>(modelName, schema);

export default userModel;