import * as UsersService from "../services/UsersService";
import { Request, Response } from "express";
import { generateToken } from "../configs/passport";

export const Register = async (req: Request, res: Response) => {
    let Data = req.body
    let newUser = await UsersService.CreateUser(Data);
    res.json({ newUser })
};

export const allUsers = async (req: Request, res: Response) => {
    let all = await UsersService.all()
    res.json({ Todos: all })
}

export const UpdatUsers = async (req: Request, res: Response) => {
    let Data = req.body
    if (Data) {
        let updat = await UsersService.Updat(Data)
        return res.json({ status: true, updat })
    } else {
        return res.json({ status: false, mensage: 'Dados incorretos' })
    }
}

export const DeletUsers = async (req: Request, res: Response) => {
    let id = req.params.id
    if (id) {
        await UsersService.Delet(id)
        return res.json({ status: true })
    } else {
        return res.json({ status: false })
    }
}

export const Login = async (req: Request, res: Response) => {
    let {user, password} = req.body;
    let userADM = 'desafiosharenergy'
    let passwordADM = 'sh@r3n3rgy'
    
    if(user == userADM && password == passwordADM){
        let token = generateToken({email: user})
        return res.json({status: true, token})
    }else{
        return res.json({status: false, mensage:'user invalid'})
    }
};