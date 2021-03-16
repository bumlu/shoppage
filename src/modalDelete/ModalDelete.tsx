
import "./ModalDelete.css"

interface ModalDeleteProps {
    DeleteItem: () => void;
}

function ModalDelete(props: ModalDeleteProps) {
    function DeleteItem() {props.DeleteItem ()} 
    function CloseModal() {}
     
    return (
        <div className="pageView">
            <button onClick={DeleteItem}>Да</button>  <button onClick={CloseModal}>Нет</button> 
        </div>
    )
}

export default ModalDelete