import { FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react"

export default () => {
    const [httpcode, setHttpcode] = useState('')

    return (
        <div>

            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-search">Digite o código HTTP</InputLabel>
                <Input
                    value={httpcode}
                    onChange={e => setHttpcode(e.target.value)}
                    id="standard-adornment-search"
                    type={'text'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                            >
                                <a href={`https://http.cat/${httpcode}`} target='_blank' style={{textDecoration: 'none'}}>
                                    <SearchIcon />
                                </a>
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </div>
    )
}