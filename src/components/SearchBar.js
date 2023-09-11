import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchBar = ({ value, handleSubmit, onChange, isLoading }) => {
  console.log(value);
  return (
    <form className="text" onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Search recipes"
        variant="outlined"
        value={value}
        onChange={onChange}
        disabled={isLoading}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <SearchIcon onClick={handleSubmit} className="icon" />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default SearchBar;
