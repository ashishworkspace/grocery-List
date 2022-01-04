const AddItem = ({newItem, setNewItem, handleNewItem}) => {
  return (
    <form className="addForm" onSubmit={(e)=>handleNewItem(e)}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        placeholder="Add Item"
        id="addItem"
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        required
        autoFocus
      />
      <button type="submit">➕</button>
    </form>
  );
};

export default AddItem;
