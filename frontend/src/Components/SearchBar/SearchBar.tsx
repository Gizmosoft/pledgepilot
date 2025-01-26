import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Search({
  campaigns,
  onSearch,
}: {
  campaigns: any[];
  onSearch: (searchQuery: string) => void;
}) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        backgroundColor: "#fff",
        borderRadius: "5px",
        padding: "0 10px",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
        maxWidth: 500,
        width: "100%",
      }}
    >
      <TextField
        placeholder="Search campaigns"
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
        sx={{ flex: 1 }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <IconButton onClick={handleSearch} sx={{ color: "#06D6A0" }}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
