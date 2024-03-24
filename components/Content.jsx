import { FaTrashAlt } from "react-icons/fa";
const Content = ({ items, handleCheck, handleDelete }) => {
  /* Way to display a list in JSX it to work through it using "maps" */
  /* An item in the list needs to have a key attribute in react */

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => {
                  handleCheck(item.id);
                }}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => {
                  handleCheck(item.id);
                }}
              >
                {item.item}
              </label>
              <FaTrashAlt
                role="button"
                tabIndex="0"
                onClick={() => {
                  handleDelete(item.id);
                }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
