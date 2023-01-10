import { Button } from "@mui/material"
import { ReactElement, useEffect, useState } from "react"
import myAPI from "../../../Apis/MyAPI"
import { User } from "../../../Types/AllTypes"
import CardUser from "../../Cards/CardUser"
import Register from "../../register/Register"
import { initalState } from "../../register/usersState"
import "./Users.css"

export default () => {
    const [Page, setPage] = useState<boolean>(true)
    const [UsersList, setUserList] = useState<User[]>()

    useEffect(() => {
        myAPI
            .get('/allUsers')
            .then(response => setUserList(response.data.Todos))
            .catch(error => console.log(error))
    }, [Page, Delet])

    function Delet(id: string) {
        myAPI
            .delete(`/deletUser/${id}`)
            .then(response => { console.log(response.data); setPage(true) })
            .catch(error => console.log(error))
    }

    function Edit(Data: any) {
        myAPI
            .put('/updatUser', Data)
            .then(response => { console.log(response.data); setPage(true) })
            .catch(window.alert)
    }

    function RegisterNewUser(Data: User) {
        myAPI
            .post('/register', Data)
            .then(response => { console.log(response.data); setPage(true) })
            .catch(window.alert)
    }

    const [CardRegister, setCard] = useState<ReactElement>(<></>)
    function PageRegister(type: string, value = initalState) {
        if (Page) {
            setPage(false)
            if (type === 'newRegister') {
                setCard(
                    <div>
                        <Register propsFunc={RegisterNewUser} data={value} title={'Cadastrar'} />
                    </div>
                )
            } else if (type === 'editUser') {
                setCard(
                    <div>
                        <Register propsFunc={Edit} data={value} title={'Editar'} />
                    </div>)
            }
        } else {
            setPage(true)
            setCard(<></>)
        }
    }

    return (
        <div className="PageUsers">
            <Button
                onClick={e => PageRegister('newRegister')}
                variant="contained"
                sx={{ position: 'absolute', top: '80px', right: '70px' }}
            >
                {Page ? 'Cadastro' : 'Usuarios'}
            </Button>
            {Page &&
                <div className="ListCards">
                    {UsersList?.map((item: User) => (
                        <CardUser
                            data={item}
                            FuncDelet={Delet}
                            FuncEdit={PageRegister}
                        />))}
                </div>}
            {!Page && CardRegister}
        </div>
    )
}