import React from "react";
import Table from "../mainTable/Table"
import "./Page.css"
import ModalDelete from "../modalDelete/ModalDelete"
import { ItemInt } from "../interface/ItemInt";

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

let tmpItemForDelete:number;

const ModalDeleteButton = (itemForDelete: number) =>{
    tmpItemForDelete=itemForDelete
}

function DeleteItem (){
ItemModel.splice(tmpItemForDelete)
}

function Page (){
    return (
   <div> <Table  ItemModel={ItemModel} ModalDeleteButton={ModalDeleteButton}/> 
    <ModalDelete DeleteItem={DeleteItem}/>
    </div>
    )
}

export default Page