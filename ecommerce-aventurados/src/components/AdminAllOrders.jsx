import React, { useEffect } from "react";
// import { useAuth } from "../contexts/AuthContext.js";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import {
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  TableHead,
} from "@material-ui/core";
// icons
import { Delete } from "@material-ui/icons";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import { useSelector, useDispatch } from "react-redux";

import { getAllOrders, deleteOrder } from "../state/orders";
import { getClickedOrder } from "../state/selectedOrder";

const useStyles = makeStyles(() => ({
  containerContent: {
    margin: "50px 0 0 0",
  },
  images: {
    width: 250,
    height: 120,
  },
  containerAddBtn: {
    width: "100%",
    margin: "0 auto",
  },
  AddBtn: {
    width: 50,
    height: 50,
    color: "darkblue",
  },
  editContaier: {
    border: "2px solid orange",
    width: "100",
  },
}));

const AdminAllOrders = () => {
  const allOrders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, []); // no se que dependencia pasarle para que renderice devuelta sin que renderice 840820948 veces.

  const handleDeleteOrder = ({ id }) => {
    dispatch(deleteOrder(id)); //BORRA
  };
  //
  //para EDITAR
  const handleClickEdit = ({ id }) => {
    dispatch(getClickedOrder(id));
  };

  const classes = useStyles();

  return (
    <>
      <IconButton color="inherit" className={classes.containerAddBtn}>
        <AddCircleOutlineIcon className={classes.AddBtn} />
      </IconButton>
      <Table size="big" className={classes.containerContent}>
        <TableHead>
          <TableRow>
            <TableCell>Orders</TableCell>
{/*             <TableCell align="center">Img</TableCell>
 */}            <TableCell align="center">Voucher</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">transaction</TableCell>
{/*             <TableCell align="center">Rating</TableCell>
             <TableCell align="center">Edit</TableCell>
 */} {/*           <TableCell align="center">Delete</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {allOrders?.map((order) => (
            <>
              <TableRow key={order.id}>
                <TableCell>
                  {<Typography component="text">{order.id}</Typography>}
                </TableCell>
{/*                 <TableCell align="center">
                  <img src={`${product.image}`} className={classes.images} />
                </TableCell>
 */}                <TableCell align="center">{`${order.voucher}`}</TableCell>
                <TableCell align="center">{`${order.amount}`}</TableCell>
                <TableCell align="center">{`${order.transaction}`}</TableCell>
{/*                 <TableCell align="center">{`${order.rating}`}</TableCell>
 */}
    {/*             <TableCell align="center">
                  <Link
                    onClick={() => handleClickEdit(order)}
                    to={`/admin/edit/orders/${order.id}`}
                  >
                    <IconButton color="inherit">
                      <EditIcon />
                    </IconButton>
                  </Link>
                </TableCell>
 */}{/* 
                <TableCell align="center">
                  <IconButton
                    edge="end"
                    color="inherit"
                    onClick={() => handleDeleteOrder(order)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
 */}              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AdminAllOrders;
