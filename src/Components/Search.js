import React, { useState } from "react";
import Searchresult from "./Searchresult";

function Search() {
  const [text, setText] = useState("");
  const InputEvent = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className=" container input-group mb-3 my-4 ">
        <input
          type="text"
          className="form-control"
          placeholder="Type something here...."
          aria-describedby="basic-addon1"
          value={text}
          onChange={InputEvent}
        />
        {text === "" ? null : <Searchresult src={text} />}
      </div>
    </>
  );
}

export default Search;
