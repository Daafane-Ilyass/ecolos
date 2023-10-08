import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter-bar">
      <div className="filter-option">
        <label htmlFor="option1">Option 1:</label>
        <select id="option1">
          <option value="all">All</option>
          <option value="value1">Value 1</option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
        </select>
      </div>
      <div className="filter-option">
        <label htmlFor="option2">Option 2:</label>
        <select id="option2">
          <option value="all">All</option>
          <option value="value4">Value 4</option>
          <option value="value5">Value 5</option>
          <option value="value6">Value 6</option>
        </select>
      </div>
      <div className="filter-option">
        <label htmlFor="option3">Option 3:</label>
        <select id="option3">
          <option value="all">All</option>
          <option value="value7">Value 7</option>
          <option value="value8">Value 8</option>
          <option value="value9">Value 9</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
