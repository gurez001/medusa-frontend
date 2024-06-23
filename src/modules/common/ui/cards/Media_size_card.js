import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button, Box, TextField } from "@mui/material";
import customTheme from "../theme/theme.config";

const Media_size_card = ({ product }) => {
  const theme = useTheme();
  return (
    <Card className='media-box-card' sx={{ display: "flex", marginBottom: 2, padding: "10px" }}>
      {" "}
      <Box sx={{ width: "15%" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={product && product.img}
          alt="ddd"
        />
      </Box>
      <Box
        className="media-box-containor"
        sx={{ display: "flex", gap: 1, width: "85%" }}
      >
        <Box
          className="media-box-col"
          sx={{ display: "flex", gap: 1, width: "33.33%" }}
        >
          <CardContent sx={{ width: "50%" }}>
            <Typography
              component="div"
              variant="h4"
              style={{ fontSize: "17px" }}
            >
              {product && product.title}
            </Typography>
            <Typography color="text.secondary" component="div">
              Corrugated box
            </Typography>
          </CardContent>
          <CardContent sx={{ width: "50%" }}>
            <Typography component="div">
              {product.size.l} x {product.size.b} x {product.size.h} Inches
            </Typography>
          </CardContent>
        </Box>

        <Box
          className="media-box-col"
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            width: "33.33%",
          }}
        >
          <CardContent sx={{ display: "flex", gap: 1 }}>
            <Typography color="text.secondary" component="div">
              12.80
            </Typography>
            <Typography color="text.secondary" component="div">
              12.80
            </Typography>
            <Typography color="text.secondary" component="div">
              12.80
            </Typography>{" "}
            <Typography color="text.secondary" component="div">
              8.96
            </Typography>{" "}
            <Typography color="text.secondary" component="div">
              8.96
            </Typography>
          </CardContent>
        </Box>
        <Box
          className="media-box-col"
          sx={{
            display: "flex",
            gap: 1,
            width: "33.33%",
            justifyContent: "end",
          }}
        >
          <TextField
            margin="normal"
            type="text"
            sx={{
              background: customTheme.themes.colors.white,
              width: "80px",
              padding: "9.5px 10px",
            }}
            size="small"
            autoComplete="Height"
            autoFocus
            value={100}
            InputLabelProps={{
              sx: {
                fontSize: "0.8rem", // Adjust the size as needed
                left: "-4px",
                background: [customTheme.themes.colors.white],
                paddingLeft: "6px !important",
                width: "70px !important",
              },
            }}
            //   value={input_value.Height}
            //   onChange={(e) => change_input_handler(e)}
          />

          <Button
            size="small"
            variant="outline"
            sx={{
              width: "100px",
              height: "40px",
              margin: "24px 0",
              color: [customTheme.themes.colors.white],
              backgroundColor: [customTheme.themes.colors.default.default_900],
              "&:hover": {
                backgroundColor: "transparent",
                color: [customTheme.themes.colors.default.default_900],
                border: `1px solid ${customTheme.themes.colors.default.default_900}`,
              },
            }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default Media_size_card;
