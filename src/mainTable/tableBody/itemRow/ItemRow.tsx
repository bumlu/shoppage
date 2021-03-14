import { ItemInt } from "../../../interface/ItemInt";

interface ItemRowProps{
    Item: ItemInt;
    
 }


function ItemRow (props: ItemRowProps){
    return (
        <div className="name pageline" >
      <span>{props.Item.itemsNumber} </span>
        <span>{props.Item.itemName}</span>
        <span> {props.Item.itemsAmount} </span>
        <span> {props.Item.prisePerOneItem} </span>
        <span><button>+</button>  <button>-</button>   </span>
        <span>  <button>x</button> </span>
         </div>
    )
};
export default ItemRow;