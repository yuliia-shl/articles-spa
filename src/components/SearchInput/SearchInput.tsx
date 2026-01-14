import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <>
      <TextField
        id="outlined-search"
        label="Filter by keywords"
        placeholder="The most successful IT companies in 2020"
        variant="outlined"
        type="search"
        sx={{
          width: "600px",
          mb: 5,
          "& .MuiInputLabel-root": {
            fontWeight: "bold",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "5px",
            border: "1px solid #eaeaea",
            backgroundColor: "#fff",
            boxShadow: "0 8px 24px 0 rgba(0, 0, 0, 0.05)",
          },
          "& input::placeholder": {
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "150%",
            color: "#575757",
            opacity: 1,
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </>
  );
};

export default SearchInput;
