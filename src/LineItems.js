const LineItems = ({ item, handleCheck, handleDelete }) => {
  return (
    <>
        <li key={item.id}>
          <input
            onChange={() => handleCheck(item.id)}
            type="checkbox"
            checked={item.checked}
          />
          <label onDoubleClick={() => handleCheck(item.id)}>{" "+ item.item + " "}</label>
          <button onClick={() => handleDelete(item.id)}> ❌ </button>
        </li>

    </>
  );
};

export default LineItems;
