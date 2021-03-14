import { ItemInt } from "../../interface/ItemInt";
import ItemRow from "./itemRow/ItemRow";
import TitleRow from "./titleRow/TitleRow";

interface TableBodyProps{
    Items: ItemInt[];
 }

function TableBody (props: TableBodyProps ){
    return(
        <div className="body">
      <TitleRow></TitleRow>
      <div className="items">
          {props.Items.map(p=>(<ItemRow  Item = {p}></ItemRow> ))}
           </div>
       </div>
    )
};

export default TableBody;