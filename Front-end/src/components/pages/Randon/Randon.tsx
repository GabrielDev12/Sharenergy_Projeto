import { Avatar, Box, Card, FormControl, IconButton, Input, InputAdornment, InputLabel, Pagination, Stack, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";
import RandonUsers from "../../../Apis/RandonUsers";
import { UsersRandon } from "../../../Types/AllTypes";
import EmailIcon from '@mui/icons-material/Email';
import TodayIcon from '@mui/icons-material/Today';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import './Randon.css'

export default () => {
    const [users, setUsers] = useState<UsersRandon>()
    const [NumberPage, setNumberPage] = useState<number>(1)
    const [search, setSearch] = useState('')

    useEffect(() => {
        loadingUsers()
    }, [NumberPage])

    function loadingUsers() {
        RandonUsers
            .get(`&results=15&page=${NumberPage}`)
            .then(response => {
                setUsers(response.data.results);
            })
            .catch(window.alert)

    };
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setNumberPage(value);
    };

    const searchUser = async (busca: string) => {
        let UserFind: UsersRandon = await RandonUsers.get('&results=200&page=1').then(response => response.data.results)

        let foundForName = UserFind.filter(item => item.name.first.toLowerCase().indexOf(busca.toLowerCase()) > -1)
        let foundForEmail = UserFind.filter(item => item.email.toLowerCase().indexOf(busca.toLowerCase()) > -1)
        let foundForUserName = UserFind.filter(item => item.login.username.toLowerCase().indexOf(busca.toLowerCase()) > -1)

        let allFounds = foundForEmail.concat(foundForName, foundForUserName);
        let FoundsNotReapt: any = [...new Set(allFounds)]
        setUsers(FoundsNotReapt)
    }

    return (
        <div className="PageRandon">
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-search">Procurar</InputLabel>
                <Input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    id="standard-adornment-search"
                    type={'text'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={e => searchUser(search)}

                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <ul className="ListRandon">
                {users && users.map(i => (
                    <li>
                        <Card sx={{maxWidth: '300px', width: '300px'}}>
                            <Box sx={{ p: 2, display: 'flex' }}>

                                <Stack spacing={0.5}>
                                    <Typography fontWeight={700}>
                                        <Avatar variant="rounded" src={i.picture.thumbnail} />
                                        {i.name.first} {i.name.last}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{display: 'flex', alignItems: 'center'}}><EmailIcon />{i.email}</Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{display: 'flex', alignItems: 'center'}}><AccountBoxIcon />{i.login.username}</Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{display: 'flex', alignItems: 'center'}}><TodayIcon />{i.registered.age}</Typography>
                                </Stack>
                            </Box>
                        </Card>
                    </li>
                ))}
            </ul>
            <Pagination count={10} variant="outlined" onChange={handleChange}/>
        </div>
    )
}