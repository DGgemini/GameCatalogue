import ListGroup from "./componets/listGroup";
import Alert from "./componets/alert";
import Button from "./componets/button";
import { useState } from "react";

function App() {
  let items = ["Dmc", "zero dawn", "doom", "Bordderlands"];
  const handelSelectItem = (items: string) => {
    console.log(items);
  };
  const [alertVisibile, setAlertvisabliity] = useState(false);

  return (
    <div>
      {alertVisibile && (
        <Alert onClose={() => setAlertvisabliity(false)}>
          <ListGroup
            items={items}
            heading={"Games"}
            onSelectItem={handelSelectItem}
          />
        </Alert>
      )}

      <Button
        onClick={() => {
          setAlertvisabliity(true);
        }}
      >
        me me me me
      </Button>
    </div>
  );
}

export default App;
