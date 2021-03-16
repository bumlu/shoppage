import { ItemInt } from "../../../interface/ItemInt";
import "./ItemRow.css"

interface ItemRowProps {
    Item: ItemInt;
    Increase: (n: number) => void;
    Decrease: (n: number) => void;
    ModalCall: (n: number) => void;
}

let block: string;

function ItemRow(props: ItemRowProps) {
    function Increase() { props.Increase(props.Item.itemsNumber - 1) }
    function Decrease() { if (props.Item.itemsAmount > 1) props.Decrease(props.Item.itemsNumber -1) }
    function ModalCall() {props.ModalCall(props.Item.itemsNumber -1)}
    if (props.Item.itemsAmount > 1) { block = "" } else { block = "block" };
    return (
        <div className="name pageline" >
            <span>{props.Item.itemsNumber} </span>
            <span>{props.Item.itemName}</span>
            <span> {props.Item.itemsAmount} </span>
            <span> {props.Item.prisePerOneItem} </span>
            <span><button className={" minus " + (block)} onClick={Decrease}>-</button>  <button onClick={Increase}>+</button> </span>
            <span>  <button onClick={ModalCall}>x</button> </span>
        </div>
    )
};
export default ItemRow;