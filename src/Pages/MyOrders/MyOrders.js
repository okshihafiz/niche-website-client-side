import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Typography } from '@mui/material';

const MyOrders = () => {

     const {user} = useAuth()
     const [orders, setOrders] = useState([]);

     useEffect( ()=>{
     const url = `http://localhost:5000/addOrders?email=${user.email}`

     fetch(url)
     .then(res => res.json())
     .then( data => setOrders(data))

     },[user.email])


     const handleDelete = id => {
          // const url = `http://localhost:5000/addOrders/${id}`
          // fetch(url,{
          //      method:'DELETE'
          // })
          // .then(data =>{
          //      console.log(data)
          // })
     }
     return (
         <Container sx={{marginTop:"80px", marginBottom:"60px"}}>

         <Typography sx={{fontWeight:'medium', mt:3}} variant="h4">
            MY TOTLA ORDERS {orders.length}
         </Typography>
               <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                    <TableHead>
                         <TableRow>
                         <TableCell>Product Name</TableCell>
                         <TableCell align="right">Description</TableCell>
                         <TableCell align="right">Price</TableCell>
                         <TableCell align="right">Action</TableCell>
                         
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {orders.map((row) => (
                         <TableRow
                         key={row._id}
                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                         >
                         <TableCell component="th" scope="row">
                              {row.title}
                         </TableCell>
                         <TableCell align="right">{row.des}</TableCell>
                         <TableCell align="right"> $ {row.price}</TableCell>
                         <TableCell align="center">
                         <Button
                         onClick={()=> handleDelete(orders._id)}
                         sx={{color:'#252525'}}
                          variant="text"
                          >
                          <i className="fas fa-trash"></i>
                          </Button> 
                          </TableCell>
                         
                         
                         </TableRow>
                         ))}
                    </TableBody>
                    </Table>
          </TableContainer>
         </Container>
     );
};

export default MyOrders;