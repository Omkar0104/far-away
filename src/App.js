import { useState } from "react";
import Form from "./component/Form";
import Logo from "./component/Logo";
import PackingList from "./component/PackingList";
import Stats from "./component/stats";

function App() {
  const [items, setItem] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
  ]);

  function addItem(newItem) {
    setItem((items) => [...items, newItem]);
  }
  function deleteItem(id) {
    console.log(id);
    setItem((items) =>
      items.filter((item) => {
        return item.id !== id;
      })
    );
    // console.log(items.id);
  }
  function isPacked(id){
    setItem((items) =>
      items.map((ele) => {
        if (ele.id === id) {
          // return ele;
          return {...ele, packed:!ele.packed};
        }
        else
        return ele;
      })
    );
    
// console.log("Changed :",items);
  }
  function clearAllItems(){
    setItem([]);
  }
  return (
    <>
      <Logo />
      <Form onAddItem={addItem} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onPacked={isPacked}
        onclearAllItems={clearAllItems}
      />
      <Stats items={items} />
    </>
  );
}

export default App;
