import { Edit, Delete, Email, Phone, AddHome, AssignmentInd } from "@mui/icons-material"
import { Card, Box, Stack, Typography, IconButton } from "@mui/material"
import { User } from "../../Types/AllTypes"

export default (props:any) => {
    const data:User = props.data
    return (
        <Card sx={{ width: '400px', maxWidth: '400px', margin: '10px' }} key={data._id}>
            <Box sx={{ p: 2, display: 'flex' }}>
                <Stack spacing={0.5}>
                    <Typography fontWeight={700}>{data.name}</Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ display: 'flex', alignItems: 'center', paddingTop: '5px' }}>
                        <Email /> 
                        {data.email}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ display: 'flex', alignItems: 'center', paddingTop: '5px' }}>
                        <Phone />
                        {data.PhoneNumber}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ display: 'flex', alignItems: 'center', paddingTop: '5px' }}>
                        <AssignmentInd />
                        {data.CPF}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ display: 'flex', alignItems: 'center', paddingTop: '5px' }}>
                        <AddHome />
                        {data.address.street}, 
                        {data.address.number}, 
                        {data.address.neighborhood}, 
                        {data.address.city}-{data.address.state}, 
                        {data.address.country}
                    </Typography>
                </Stack>
                <Stack>
                    <IconButton
                        onClick={e => props.FuncEdit('editUser', data)}
                    >
                        <Edit sx={{ fontSize: 14 }} />
                    </IconButton>
                    <IconButton
                        onClick={e => props.FuncDelet(data._id)}
                    >
                        <Delete sx={{ fontSize: 14 }} />
                    </IconButton>
                </Stack>
            </Box>
        </Card>
    )
}