export type UsersRandon = [{
    email: string,
    login: {
        md5: string
        password: string
        salt: string
        sha1: string
        sha256: string
        username: string
        uuid: string
    },
    name: {
        first: string,
        last: string,
        title: string
    },
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    },
    registered: {
        age: number,
        date: string
    }
}]

export type User = {
    _id: string
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