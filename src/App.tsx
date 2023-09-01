import DropdownMenu from "./DropdownMenu";
import "./App.css";

function App() {
  return (
    <>
      <h3>multiselect dropdown</h3>
      {DropdownMenu(
        "Select a fruit!",
        ["apple", "banana", "clementine", "cherries", "strawberries"],
        false
      )}
      <h3>single-select dropdown</h3>
      {DropdownMenu("Select a name!", ["Uma", "Gloria", "Seonha"], true)}
    </>
  );
}

export default App;
