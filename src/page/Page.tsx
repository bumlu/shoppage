import React, { useState } from "react";
import "./Page.css"
import ModalDelete from "../modalDelete/ModalDelete"
import { ItemInt } from "../interface/ItemInt";
import TitleRow from "../mainTable/tableBody/titleRow/TitleRow";
import ItemRow from "../mainTable/tableBody/itemRow/ItemRow";

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

let indexItemForDelete: number;

function Page() {

    const [item, setItem] = useState(ItemModel.slice())
    const DeleteItem = () => {
        ItemModel.splice(indexItemForDelete, 1)
        let i=1
        ItemModel.map(p => p.itemsNumber=i++)
        setItem(ItemModel.slice())
        CloseModal ()
    }

    const CloseModal= () =>{
        setHidden("hidden")
    }

    function getTotalPrice() {
        let tmpResult = 0; item.map(i =>
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
    }
    const [hidden, setHidden] = useState("hidden")
    const ModalDeleteButton = (itemForDelete: number) => {
        indexItemForDelete = itemForDelete
        setHidden("")
    }
    return (
        <div> <div className="table">
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

            <div className="body">
                <TitleRow></TitleRow>
                <div className="items">
                    {item.map(p => <ItemRow Item={p} Increase={IncreaseButton} Decrease={DecreaseButton} ModalCall={ModalDeleteButton}></ItemRow>)}
                </div>
            </div>

            <div className="footer">
                Сумма: <b>{getTotalPrice()}</b>
            </div>
        </div>
            <ModalDelete DeleteItem={DeleteItem} hidden={hidden} CloseModal={CloseModal}/>
        </div>
    )
}


export default Page