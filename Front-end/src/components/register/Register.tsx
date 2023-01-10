import { Grid, Typography, TextField, Button } from '@mui/material';
import './Register.css'
import { useState } from 'react';
import { User } from '../../Types/AllTypes';

export default (props: any) => {
    const propsFunc = props.propsFunc
    const DataProps: User = props.data
    const [_id, setid] = useState<string>(DataProps._id)
    const [name, setName] = useState<string>(DataProps.name)
    const [email, setEmail] = useState<string>(DataProps.email)
    const [street, setStreet] = useState<string>(DataProps.address.street)
    const [neighborhood, setNeighborhood] = useState<string>(DataProps.address.neighborhood)
    const [number, setNumber] = useState<string>(DataProps.address.number)
    const [state, setState] = useState<string>(DataProps.address.state)
    const [city, setCity] = useState<string>(DataProps.address.city)
    const [country, setCountry] = useState<string>(DataProps.address.country)
    const [CPF, setCPF] = useState<string>(DataProps.CPF)
    const [PhoneNumber, setPhoneNumber] = useState<string>(DataProps.PhoneNumber)

    const Data = {
        _id,
        name,
        email,
        street,
        neighborhood,
        number,
        state,
        country,
        city,
        CPF,
        PhoneNumber
    }

    function handleClick() {
        propsFunc(Data)
    }

    return (
        <div className='register'>
            <Typography variant="h6" gutterBottom>
                {props.title}
            </Typography>
            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'start' }}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={name}
                        onChange={e => setName(e.target.value)}
                        id="firstName"
                        name="firstName"
                        label="Nome"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={CPF}
                        onChange={e => setCPF(e.target.value)}
                        id="CPF"
                        name="CPF"
                        label="CPF"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={PhoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        id="PhoneNumber"
                        name="PhoneNumber"
                        label="Número de telefone"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={street}
                        onChange={e => setStreet(e.target.value)}
                        id="address1"
                        name="address1"
                        label="Rua"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                        id="number"
                        name="number"
                        label="Número da casa"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={neighborhood}
                        onChange={e => setNeighborhood(e.target.value)}
                        id="address2"
                        name="address2"
                        label="Bairro"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        id="city"
                        name="city"
                        label="Cidade"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={state}
                        onChange={e => setState(e.target.value)}
                        id="state"
                        name="state"
                        label="Estado"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                        id="country"
                        name="country"
                        label="País"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant='contained' onClick={handleClick}>{props.title}</Button>
                </Grid>

            </Grid>
        </div>
    );
}