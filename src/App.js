import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("shoppingList")) || []);
  const [newItem, setNewItem] = useState(() => "");
  const [search, setSearch] = useState(() => "");

  // SET AND SAVE
  // const setAndSave = (listItems) => {
  //   setItems(listItems);
    
  // };

  // HANDLE CHECKBOX
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  // DELETE ITEMS
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  // ADD NEW ITEM

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item: item };
    const oldNew = [...items, myNewItem];
    setItems(oldNew);
  };

  const handleNewItem = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(items));
  }, [items]);

  return (
    <div className="App">
      <Header title="Groceries" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleNewItem={handleNewItem}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
