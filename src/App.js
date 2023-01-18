import "./App.css";

function App() {
  const VegetableItem = [
    { name: "Jhinga", price: 42 },
    { name: "Chichinga ", price: 75 },
    { name: "Fulkopi", price: 56 },
    { name: "Aloo", price: 40 },
    { name: "Toamaatar", price: 120 },
    { name: "Mulo", price: 93 },
    { name: "Karola", price: 98 },
    { name: "Lau", price: 90 },
    { name: "Kumro", price: 35 },
    { name: "Sausha", price: 68 },
    { name: "Pyajj", price: 200 },
  ];

  const newPrice = VegetableItem.map((Vegetable) => Vegetable.price + Vegetable.price * 0.15);
  // console.log(newPrice);

  return (
    <div className="App">
      {/* add 15% VAT */}
      <div className="VAT">
        <h3 >Adding VAT with items</h3>
        <table>
          <tr>
            <th style={{ border: "1px solid black", padding: "1rem" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "1rem" }}>
              Original Price
            </th>
            <th style={{ border: "1px solid black", padding: "1rem" }}>
              15% VAT
            </th>
            <th style={{ border: "1px solid black", padding: "1rem" }}>
              Total after VAT
            </th>
          </tr>
          <tr>
            <td style={{ border: "1px solid black" }}>
              {VegetableItem.map((Vegetable) => (
                <li
                  style={{
                    listStyle: "none",
                    textAlign: "left",
                    border: "1px solid black",
                    padding: "0.5rem",
                  }}
                >
                  {Vegetable.name}
                </li>
              ))}
            </td>
            <td style={{ border: "1px solid black" }}>
              {VegetableItem.map((Vegetable) => (
                <li
                  style={{
                    listStyle: "none",
                    textAlign: "right",
                    border: "1px solid black",
                    padding: "0.5rem",
                  }}
                >
                  {Vegetable.price} /-
                </li>
              ))}
            </td>
            <td style={{ border: "1px solid black" }}>
              {VegetableItem.map((Vegetable) => (
                <li
                  style={{
                    listStyle: "none",
                    textAlign: "right",
                    border: "1px solid black",
                    padding: "0.5rem",
                  }}
                >
                  {Vegetable.price * 0.15} /-
                </li>
              ))}
            </td>
            <td style={{ border: "1px solid black" }}>
              {VegetableItem.map((Vegetable) => (
                <li
                  style={{
                    listStyle: "none",
                    textAlign: "right",
                    border: "1px solid black",
                    padding: "0.5rem",
                  }}
                >
                  {Vegetable.price + Vegetable.price * 0.15} /-
                </li>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black" }}>
              <h4>Total Price</h4>
            </td>
            <td style={{ border: "1px solid black", textAlign: "right" }}>
              <h4>
                {VegetableItem.reduce((n, Vegetable) => (n = n + Vegetable.price), 0)} /-
              </h4>
            </td>
            <td style={{ border: "1px solid black", textAlign: "right" }}>
              <h4>
                <span>
                  {Math.round(
                    VegetableItem.reduce((n, Vegetable) => (n = n + Vegetable.price * 0.15), 0)
                  )}{" "}
                  /-
                </span>
              </h4>
            </td>
            <td style={{ border: "1px solid black", textAlign: "right" }}>
              <h4>
                <span>
                  {Math.round(
                    newPrice.reduce((n, price) => (n = n + price), 0)
                  )}{" "}
                  /-
                </span>
              </h4>
            </td>
          </tr>
        </table>
      </div>

      {/* Filter user */}
      <div className="filter">
        <h3>Users price is above 50:</h3>
        <table>
          <tr>
            <th style={{ border: "1px solid black", padding: "1rem" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "1rem" }}>
              Price
            </th>
          </tr>
          <tr>
            <td >
              {VegetableItem.filter((Vegetable) => Vegetable.price > 50)
                .map((Item) => (
                  <li
                    style={{
                      listStyle: "none",
                      textAlign: "right",
                      border: "1px solid black",
                      padding: "0.5rem",
                    }}
                  >
                    {Item.name}
                  </li>
                ))}
            </td>
            <td>
              {VegetableItem
                .filter((Vegetable) => Vegetable.price > 50)
                .map((Item) => (
                  <li
                    style={{
                      listStyle: "none",
                      textAlign: "right",
                      border: "1px solid black",
                      padding: "0.5rem",
                    }}
                  >
                    {Item.price}/-
                  </li>
                ))}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;