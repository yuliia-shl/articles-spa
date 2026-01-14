import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", mb: 5 }}>
      <label htmlFor="outlined-search" style={{ fontWeight: 600 }}>
        Filter by keywords
      </label>
      <TextField
        id="outlined-search"
        placeholder="The most successful IT companies in 2020"
        variant="outlined"
        type="search"
        sx={{
          width: "600px",

          "& .MuiInputLabel-root": {
            fontWeight: "bold",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "5px",
            border: "1px solid #eaeaea",
            backgroundColor: "#fff",
            boxShadow: "0 8px 24px 0 rgba(0, 0, 0, 0.05)",
            "&.Mui-focused fieldset": {
              borderColor: "#36363660",
            },
          },
          "& input::placeholder": {
            fontWeight: 400,
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
    </Box>
  );
};

export default SearchInput;
