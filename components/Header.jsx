
import Button from "./Button"

const Header = (props) => {

    return (
        <header className="header">
            <h1>Task Tracker</h1>
         <Button onAdd={props.toggleShow} color={props.showAdd?"red":"green"}text={props.showAdd?"Close":"Add"}/>
        </header>
    )
}

export default Header
