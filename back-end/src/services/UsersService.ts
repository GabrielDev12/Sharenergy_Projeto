import Users from "../models/Users"

type DataType = {
    name: string,
    email: string,
    street: string,
    neighborhood: string,
    number: string,
    state: string,
    country: string,
    city: string,
    CPF: string,
    PhoneNumber: string
}

export const CreateUser = async (Data: DataType) => {
    let newUser = await Users.create({
        name: Data.name,
        email: Data.email,
        address: {
            street: Data.street,
            neighborhood: Data.neighborhood,
            number: Data.number,
            state: Data.state,
            country: Data.country,
            city: Data.city
        },
        CPF: Data.CPF,
        PhoneNumber: Data.PhoneNumber
    })
    return newUser._id;
}

export const FindByEmail = async (email: string) => {
    return await Users.findOne({ where: { email } })
}

export const FindById = async (id: string) => {
    return await Users.findOne({ _id: id })
}

export const Delet = async (id: string) => {
    return await Users.findByIdAndDelete({ _id: id })
}

export const Updat = async (Data: any) => {
    let user = await Users.findOne({ _id: Data._id })
    if (user) {
        if (Data.name) { user.name = Data.name }
        if (Data.email) { user.email = Data.email }
        if (Data.street) { user.address.street = Data.street }
        if (Data.neighborhood) { user.address.neighborhood = Data.neighborhood }
        if (Data.number) { user.address.number = Data.number }
        if (Data.state) { user.address.state = Data.state }
        if (Data.city) { user.address.city = Data.city }
        if (Data.country) { user.address.country = Data.country }
        if (Data.CPF) { user.CPF = Data.CPF }
        if (Data.PhoneNumber) { user.PhoneNumber = Data.PhoneNumber }
        return await user.save()
    } else {
        return { status: false, mensage: 'user not found' }
    }
}

export const all = async () => {
    return await Users.find()
}