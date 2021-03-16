import { ItemInt } from "../../interface/ItemInt";
import ItemRow from "./itemRow/ItemRow";
import TitleRow from "./titleRow/TitleRow";

interface TableBodyProps{
    Items: ItemInt[];
    Increase:(n:number)=>void;
    Decrease:(n:number)=>void;
    ModalCall:(n:number)=>void;
 };

function TableBody (props: TableBodyProps ){
    return(
        <div className="body">
      <TitleRow></TitleRow>
      <div className="items">
          {props.Items.map(p=><ItemRow Item={p} Increase={props.Increase} Decrease={props.Decrease} ModalCall={props.ModalCall}></ItemRow>)}
           </div>
       </div>
    )
};

export default TableBody;