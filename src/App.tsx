import '@mantine/core/styles.css';
import './App.scss';
import { Button, Checkbox, Input } from "@mantine/core";
import { ChangeEvent, FormEvent, useState } from "react";

export default function App() {
    interface toDoItem {
        id: string,
        name: string,
        completed: boolean
    }

    const [newItem, setNewItem] = useState("");
    const [toDoList, setToDoList] = useState<toDoItem[]>([]);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (newItem) {
            setToDoList(currentToDoList => {
                return [...currentToDoList, {id: crypto.randomUUID(), name: newItem, completed: false}]
            });
            setNewItem("");
        }
    }

    function handleCheckboxOnChange(event: ChangeEvent<HTMLInputElement>, id: string) {
        setToDoList(currentToDoList => {
            return currentToDoList.map(toDoItem =>
                toDoItem.id === id ? {...toDoItem, completed: event.target.checked} : toDoItem
            )
        });
    }

    function handleDeleteButtonClick(id: string) {
        setToDoList(currentToDoList =>
            currentToDoList.filter(item => item.id !== id));
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
                        <div className={"to-do-item"} key={item.id}>
                            <Checkbox
                                label={item.name}
                                onChange={(event) => handleCheckboxOnChange(event, item.id)}
                                color="green"
                                variant="outline"
                                checked={item.completed}
                                classNames={{
                                    label: item.completed ? "completed-label" : ""
                                }}
                            />
                            <Button
                                color="red"
                                variant="outline"
                                onClick={() => {
                                    handleDeleteButtonClick(item.id)
                                }}>
                                Delete
                            </Button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}