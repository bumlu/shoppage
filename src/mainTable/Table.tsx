import { useState } from "react";
import { ItemInt } from "../interface/ItemInt";
import "./Table.css";
import TableBody from "./tableBody/TableBody";


const ItemModel: ItemInt[] = [
    {
        itemsNumber: 1,
        itemName: "Носки",
        itemsAmount: 3,
        prisePerOneItem: 55
    },
    {
        itemsNumber: 2,
        itemName: "Пижама для продолжительного сна",
        itemsAmount: 1,
        prisePerOneItem: 1399
    },

    {
        itemsNumber: 3,
        itemName: "Велошлем",
        itemsAmount: 1,
        prisePerOneItem: 6600
    }

];

function Table() {
    const [Item, setItem] = useState(ItemModel)
    const IncreaseButton = (itemForIncrement: number) => {
        ItemModel[itemForIncrement].itemsAmount++;
        setItem(ItemModel)
    };
    const DecreaseButton = (itemForDecrement: number) => {
        ItemModel[itemForDecrement].itemsAmount--;
        setItem(ItemModel)
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
            <TableBody Items={Item} Increase={IncreaseButton} Decrease={DecreaseButton}/>

            <div className="footer">
                <b> Сумма: 1300 руб.</b>
            </div>
        </div>
    );
}

export default Table;