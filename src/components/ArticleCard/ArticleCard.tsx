import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { Box } from "@mui/material";

const ArticleCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        backgroundColor: "#fff",
        boxShadow: "0 8px 24px 0 rgba(0, 0, 0, 0.05)",
        borderRadius: "5px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/test.jpg"
          alt="green iguana"
          sx={{ width: 400, height: 217, objectFit: "cover" }}
        />
        <CardContent sx={{ padding: "24px 24px 0", mb: 1.5 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3, gap: 1 }}>
            <CalendarTodayOutlinedIcon
              sx={{ fontSize: 16, color: "rgba(54, 54, 54, 0.6)" }}
            />
            <Typography sx={{ color: "rgba(54, 54, 54, 0.6)", fontSize: 14 }}>
              June 29th, 2021
            </Typography>
          </Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ mb: 2.5 }}
          >
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ padding: "10px 24px 24px" }}>
        <Button
          href="/"
          size="small"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          sx={{
            fontWeight: "bold",
            color: "#363636",
            textTransform: "none",
            paddingLeft: 0,
          }}
        >
          Read more
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
