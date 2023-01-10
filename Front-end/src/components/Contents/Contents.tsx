import { Route, Routes } from "react-router-dom";
import { isAuthenticated, isRemember, signOut} from "../../Apis/auth";
import CAT from "../pages/CAT/CAT";
import Dogs from "../pages/Dogs/Dogs";
import Login from "../pages/Login/Login";
import Randon from "../pages/Randon/Randon";
import Users from "../pages/Users/Users";
import './Contents.css'

let logged = isAuthenticated()
let remember = isRemember()
let loggout = () => { signOut() }
if(!remember){
    setTimeout(loggout, 100000)
}

export default () => {
    return (
        <main>
            {!logged &&
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="*" element={<Login />} />
                </Routes>
            }
            {logged &&
                <Routes>
                    <Route path="/RandomUser" element={<Randon />} />
                    <Route path="/CAT" element={<CAT />} />
                    <Route path="/Dogs" element={<Dogs />} />
                    <Route path="/Users" element={<Users />} />
                    <Route path="*" element={<Randon />} />
                </Routes>
            }
        </main>
    )
}