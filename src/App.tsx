import '@mantine/core/styles.css';
import './App.scss';
import { Button, Checkbox, Input } from "@mantine/core";
import { FormEvent, useState } from "react";

export default function App() {
    const [newItem, setNewItem] = useState("");
    const [toDoList, setToDoList] = useState<string[]>([]);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setToDoList(currentToDoList => {
            return [...currentToDoList, newItem]
        });

        setNewItem("");
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
                    <Button type="submit">
                        Add Item
                    </Button>
                </form>
            </div>
            <div className={"to-do-list-container"}>
                <div className={"title"}>
                    To-Do List
                </div>
                {toDoList.length === 0 ? <div className={"to-do-empty-text"}>The To-Do list is empty!</div> : null}
                {toDoList.map(item => {
                    return (
                        <div className={"to-do-item"} key={crypto.randomUUID()}>
                            <Checkbox label={item}></Checkbox>
                            <Button color="red" variant="outline">
                                Delete
                            </Button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}