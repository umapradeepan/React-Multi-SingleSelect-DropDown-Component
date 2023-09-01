import { useState } from "react";

function DropdownMenuOption(dropdownOption: string, toggleOption: () => void) {
  return (
    <span>
      <input key={dropdownOption} type="button" onClick={toggleOption} />{" "}
      {dropdownOption}
    </span>
  );
}

export default function DropdownMenu(
  defaultTitle: string,
  dropdownOptions: string[],
  singleselect: boolean
) {
  const [hideDropdown, setHideDropdown] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState(() => new Set());
  const [, setState] = useState(false);
  function updateSelectedOptions(dropdownOption: string) {
    return () => {
      if (singleselect) {
        const next = new Set([dropdownOption]);
        setSelectedOptions(next);
      } else if (dropdownOption in selectedOptions) {
        setSelectedOptions((prev) => {
          const next = new Set(prev);

          next.delete(dropdownOption);

          return next;
        });
      } else {
        setSelectedOptions((prev) => new Set(prev).add(dropdownOption));
      }
      console.log(selectedOptions);
    };
  }
  function getDropdownDisplay() {
    if (selectedOptions.size === 0) {
      return defaultTitle;
    } else {
      return Array.from(selectedOptions).join(", ");
    }
  }

  return (
    <div className="card">
      <button onClick={() => setHideDropdown(!hideDropdown)}>
        {getDropdownDisplay()}
        <b> V</b>
      </button>
      {!hideDropdown && (
        <div>
          {dropdownOptions.map((dropdownOption) =>
            DropdownMenuOption(
              dropdownOption,
              updateSelectedOptions(dropdownOption)
            )
          )}
          {!singleselect &&
            DropdownMenuOption("SELECT ALL", () => {
              setSelectedOptions(new Set(dropdownOptions));
              setState((prev) => !prev);
              console.log(selectedOptions);
            })}
          {!singleselect &&
            DropdownMenuOption("DESELECT ALL", () => {
              setSelectedOptions(new Set());
            })}
        </div>
      )}
    </div>
  );
}
