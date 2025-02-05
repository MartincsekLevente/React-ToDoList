import '@mantine/core/styles.css';
import './App.scss';
import { Button, Checkbox, Input } from "@mantine/core";
import { FormEvent, useState } from "react";

function App() {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(newItem)
    }

    return (
        <div className={"app-container"}>
            <div className={"new-item-container"}>
                <div className={"title"}>
                    New Item
                </div>
                <form className={"new-item-form"} onSubmit={handleSubmit}>
                    <Input
                        value={newItem}
                        onChange={event => setNewItem(event.target.value)}
                        placeholder="Type here..."/>
                    <Button>
                        Add Item
                    </Button>
                </form>
            </div>
            <div className={"to-do-list-container"}>
                <div className={"title"}>
                    To-Do List
                </div>
                <div className={"to-do-item"}>
                    <Checkbox label="Do Laundry"></Checkbox>
                    <Button color="red" variant="outline">
                        Delete
                    </Button>
                </div>
                <div className={"to-do-item"}>
                    <Checkbox label="Item 2 here"></Checkbox>
                    <Button color="red" variant="outline">
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;
