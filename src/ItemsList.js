import LineItems from "./LineItems";
const ItemsList = ({ items, handleCheck, handleDelete }) => {
  return (
    
    
        <ul className="items">
          {items.map((item) => (
            <LineItems
              key={item.id}
              item={item}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      
    
  );
};

export default ItemsList;
