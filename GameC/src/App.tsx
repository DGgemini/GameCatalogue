import ListGroup from "./componets/listGroup";
import Alert from "./componets/alert";
import Nav from "./componets/nav";

function App() {
  let items = ["Dmc", "zero dawn", "doom", "Bordderlands"];

  const handelSelectItem = (items: string) => {
    console.log(items);
  };

  return (
    <div>
      <Nav />
      <Alert>
        <ListGroup
          items={items}
          heading={"Games"}
          onSelectItem={handelSelectItem}
        />
      </Alert>
    </div>
  );
}

export default App;
