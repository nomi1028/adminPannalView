import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Grid } from "@mui/material";
import FormLayoutsSeparator from "./Form";

// import img from "./USD_Coin_icon.webp";

export default function MediaCard({
  SignleData,
  adress,
  makeradress,
  Tradenbr,
}) {
  const [takerAssets, SetTakeAssets] = React.useState();
  console.log(Tradenbr, "Tradenbr");
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
      console.log(data.tokenadress);
      console.log(adress, "adress");
      if (data.tokenadress == adress) {
        console.log(data);
        SetTakeAssets(data);
      }
    });
  }, [adress]);

  // const [id, setId] = React.useState();
  // const [metaid, setmetamaskID] = React.useState();
  // const [Data, setData] = React.useState();

  // React.useEffect(() => {
  //   let variable = cardData?.HaveAssets?.slice(0, 42);
  //   let metamaskid = cardData?.HaveAssets?.slice(42);

  //   console.log();
  //   if (variable && metamaskid) {
  //     setId(variable);
  //     setmetamaskID(metamaskid);
  //   }
  // }, [cardData]);
  // React.useEffect(() => {
  //   if (id && metaid) {
  //     axios
  //       .get(
  //         `https://apl4mh4j0c.execute-api.us-west-2.amazonaws.com/Prod/api/v1/asset/${id}/${metaid}`
  //       )
  //       .then((resp) => {
  //         console.log(JSON.parse(resp.data), "res");

  //         setData(JSON.parse(resp.data));
  //       });
  //   }
  // }, [id, metaid]);

  // const obj = JSON.parse(cardData?.Order);
  // const enableMetamask = async () => {
  //   let accounts = await window.ethereum.enable();
  //   console.log(accounts[0]);
  // };
  return (
    <>
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
          <Grid item md={6} sm={6} lg={6}>
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
                  {takerAssets?.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ backgroundColor: "black", color: "white" }}
                >
                  Lizards are a widespread group of
                </Typography>
              </CardContent>

              <Typography sx={{ display: "flex" }}>
                <Typography
                  variant="body2"
                  sx={{ width: "50%", padding: "15px" }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={takerAssets?.image}
                    alt="green iguana"
                  />
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ width: "50%" }}
                >
                  ID:1.00 USD Amount:1.00 USD
                </Typography>
              </Typography>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {takerAssets?.tokenadress}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={6} sm={6} lg={6}>
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
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ backgroundColor: "black", color: "white" }}
                >
                  Lizards are a widespread group of
                </Typography>
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
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ width: "50%" }}
                >
                  ID:1.00 USD Amount:1.00 USD
                </Typography>
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
            />
          )}
        </Grid>
      </Grid>
    </>
  );
}
