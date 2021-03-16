
import "./ModalDelete.css"

interface ModalDeleteProps {
    DeleteItem: () => void;
    hidden: string;
    CloseModal: () => void;
}



function ModalDelete(props: ModalDeleteProps) {
    function DeleteItem() {props.DeleteItem ()} 
    function CloseModal() {props.CloseModal ()}
  
    return (
        <div className={"pageView " + (props.hidden)}> 
        <h2 className="text">Товар удаляем? </h2>
         <p> <button onClick={DeleteItem}>Да</button>  <button onClick={CloseModal}>Нет</button>  </p> 
        </div>
    )
}

export default ModalDelete