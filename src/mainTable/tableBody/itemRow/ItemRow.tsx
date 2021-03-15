import { ItemInt } from "../../../interface/ItemInt";

interface ItemRowProps{
    Item: ItemInt;
    Increase:(n:number)=>void;
    Decrease:(n:number)=>void;    
 }


function ItemRow (props: ItemRowProps){
    function Increase (){props.Increase(props.Item.itemsNumber -1) }
    return (
        <div className="name pageline" >
      <span>{props.Item.itemsNumber} </span>
        <span>{props.Item.itemName}</span>
        <span> {props.Item.itemsAmount} </span>
        <span> {props.Item.prisePerOneItem} </span>
        <span><button onClick={Increase}>+</button>  <button>-</button>   </span>
        <span>  <button>x</button> </span>
         </div>
    )
};
export default ItemRow;