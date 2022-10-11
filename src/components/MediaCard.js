import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Grid } from "@mui/material";
import FormLayoutsSeparator from "./Form";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// import img from "./USD_Coin_icon.webp";

export default function MediaCard({
  SignleData,
  adress,
  makeradress,
  Tradenbr,
  takerData,
  setValue,
}) {
  const [takerAssets, SetTakeAssets] = React.useState();
  const record = [
    {
      tokenadress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      image: "/ether.png",
      name: "Wrap ETHER",
    },
    {
      tokenadress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      image: "/USD_Coin_icon.webp",
      name: "USD Coin",
    },
  ];
  React.useEffect(() => {
    record.map((data) => {
      if (data.tokenadress == adress) {
        // SetTakeAssets(data);
      }
    });
    if (takerData) {
      SetTakeAssets(takerData);
    }
  }, [adress]);
  console.log(adress, "takerData");

  return (
    <>
      <Grid
        container
        md={12}
        lg={12}
        // display={"flex"}
      >
        <Typography
          onClick={() => setValue(true)}
          sx={{
            background: "black",
            color: "white",
            cursor: "pointer",
            paddingX: "15px",
            paddingY: "7px",
            borderRadius: "15px",
            // diplay: "flex",
            // alignItems: "center",
          }}
        >
          <ArrowBackIcon />
        </Typography>
        <Grid
          item
          container
          md={12}
          sm={12}
          lg={12}
          sx={{ paddingX: "70px", paddingY: "20px" }}
          spacing={3}
        >
          <Grid item md={5} sm={12} lg={5}>
            <Card
              sx={{
                maxWidth: 445,
                paddingTop: "5px",
                paddingBottom: "5px",
                paddingX: "5px",
                borderRight: "2px solid black",
                borderBottom: "2px solid black",
                borderLeft: "2px solid blue",
                borderTop: "2px solid blue",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    borderBottom: "2px solid black",
                    display: "inline",
                  }}
                >
                  {takerData?.name}
                </Typography>
                {/* <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ backgroundColor: "black", color: "white" }}
                >
                  Lizards are a widespread group of
                </Typography> */}
              </CardContent>

              <Typography sx={{ display: "flex" }}>
                <Typography
                  variant="body2"
                  sx={{ width: "50%", padding: "15px" }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={takerData?.image_url}
                    alt="green iguana"
                  />
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ width: "50%" }}
                >
                  {/* ID:1.00 USD Amount:1.00 USD */}
                </Typography>
              </Typography>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {/* {takerAssets?.tokenadress} */}
                  {adress}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={5} sm={12} lg={5}>
            <Card
              sx={{
                maxWidth: 445,
                paddingTop: "5px",
                paddingBottom: "5px",
                paddingX: "5px",
                borderRight: "2px solid black",
                borderBottom: "2px solid black",
                borderLeft: "2px solid blue",
                borderTop: "2px solid blue",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    borderBottom: "2px solid black",
                    display: "inline",
                  }}
                >
                  {SignleData?.name}
                </Typography>
                {/* <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ backgroundColor: "black", color: "white" }}
                >
                  Lizards are a widespread group of
                </Typography> */}
              </CardContent>

              <Typography sx={{ display: "flex" }}>
                <Typography
                  variant="body2"
                  sx={{ width: "50%", padding: "15px" }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={SignleData?.image_url}
                    alt="green iguana"
                  />
                </Typography>
                {/* <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ width: "50%" }}
                >
                  ID:1.00 USD Amount:1.00 USD
                </Typography> */}
              </Typography>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {makeradress}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        md={12}
        lg={12}
        // display={"flex"}
      >
        <Grid
          item
          container
          md={12}
          sm={12}
          lg={12}
          sx={{ paddingX: "70px", paddingY: "20px" }}
        >
          <Typography variant="h6">Your Trade Code is:</Typography>
          {Tradenbr && <Typography variant="h6">{Tradenbr}</Typography>}
        </Grid>
      </Grid>
      <Grid
        container
        md={12}
        lg={12}
        // display={"flex"}
      >
        <Grid
          item
          container
          md={12}
          sm={12}
          lg={12}
          sx={{ paddingX: "70px", paddingY: "20px" }}
        >
          {takerAssets && (
            <FormLayoutsSeparator
              takerAssets={takerAssets}
              SignleData={SignleData}
              adress={adress}
              Tradenbr={Tradenbr}
              makeradress={makeradress}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
}
