import { useState } from "react";
import { User } from "../../Types/AllTypes";

export const initalState: User = {
    _id: '',
    name: '',
    email: '',
    address: {
        street: '',
        neighborhood: '',
        number: '',
        state: '',
        country:'',
        city: ''
    },
    CPF: '',
    PhoneNumber:''
}