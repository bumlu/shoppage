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
    const [Item, setItem] = useState(ItemModel.concat())
    function getTotalPrice() {
        let tmpResult = 0; Item.map(i =>
            (tmpResult += i.itemsAmount * i.prisePerOneItem));
        return tmpResult
    }
    const IncreaseButton = (itemForIncrement: number) => {
        ItemModel[itemForIncrement].itemsAmount++;
        setItem(ItemModel.concat())
    };
    const DecreaseButton = (itemForDecrement: number) => {
        ItemModel[itemForDecrement].itemsAmount--;
        setItem(ItemModel.concat())
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
            <TableBody Items={Item} Increase={IncreaseButton} Decrease={DecreaseButton} />

            <div className="footer">
                Сумма: <b>{getTotalPrice()}</b>
            </div>
        </div>
    );
}

export default Table;