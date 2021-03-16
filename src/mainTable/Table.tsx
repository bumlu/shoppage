import { useState } from "react";
import { ItemInt } from "../interface/ItemInt";
import ModalDelete from "../modalDelete/ModalDelete";
import "./Table.css";
import TableBody from "./tableBody/TableBody";

interface TableProps {
    ItemModel:ItemInt[] 
    ModalDeleteButton:(itemForDelete:number)=>void
}

function Table(props:TableProps) {
    const [Item, setItem] = useState(props.ItemModel.concat())
    function getTotalPrice() {
        let tmpResult = 0; Item.map(i =>
            (tmpResult += i.itemsAmount * i.prisePerOneItem));
        return tmpResult
    }
    const IncreaseButton = (itemForIncrement: number) => {
        props.ItemModel[itemForIncrement].itemsAmount++;
        setItem(props.ItemModel.concat())
    };
    const DecreaseButton = (itemForDecrement: number) => {
        props.ItemModel[itemForDecrement].itemsAmount--;
        setItem(props.ItemModel.concat())
    };
   

    return (
        <div className="table">
            <div className="header">
                <div> Заказ #132 </div>
                <div className="order-details">
                    <span>
                        <b>Адрес: Спб, Ленина 12а 3 </b>
                    </span>
                    <span>
                        <b>Дата:14:03:2021</b>
                    </span>
                </div>
                <div>
                    <b>
                        <br></br> Детали заказа:
        </b>
                </div>
            </div>
            <TableBody Items={Item} Increase={IncreaseButton} Decrease={DecreaseButton} ModalCall={props.ModalDeleteButton} />

            <div className="footer">
                Сумма: <b>{getTotalPrice()}</b>
            </div>
        </div>
    );
}

export default Table;