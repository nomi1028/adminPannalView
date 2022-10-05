import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Grid } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import MediaCard from "./MediaCard";
// import img from "./USD_Coin_icon.webp";

export default function MainCard({
  cardData,
  setValue,
  setSingleData,
  setAdress,
  setmakerAdress,
  setTradenbr,
}) {
  console.log(cardData, "jhyguug");
  const [id, setId] = React.useState();
  const [taker, setTakerData] = React.useState();
  const [metaid, setmetamaskID] = React.useState();
  const [tokenAdress, settokenAdress] = React.useState();
  const [makeTokenAdress, setMakertokenAdress] = React.useState();
  const [tradecode, setTradeCode] = React.useState();

  const [Data, setData] = React.useState();
  // const formData = new FormData();
  // formData.append("description", tokenAdress);
  // formData.append("company_Name", makeTokenAdress);
  // const submit = event => {
  //   event.preventDefault()
  //   axios.post('http://localhost:5000/api/student/', formData, {
  //     headers: {
  //       'content-type': 'multipart/form-data'
  //     },
  //     mode: 'no-cors'
  //   }).then(res => {
  //     console.log(res)

  //   })
  // }

  React.useEffect(() => {
    let variable = cardData?.HaveAssets?.slice(0, 42);
    let metamaskid = cardData?.HaveAssets?.slice(42);

    let jsonData = JSON.parse(cardData?.Order);

    let jsonArrayData = jsonData.takerAssetData.split("");
    var tempArray = [];
    var anotherTempArray = [];
    jsonArrayData.map((char) => {
      if (char == 0) {
        anotherTempArray.push(char);
        if (anotherTempArray.length >= 3) {
          tempArray = [];
          anotherTempArray = [];
        }
      } else {
        anotherTempArray = [];
      }

      tempArray.push(char);

      if (tempArray.length >= 40 && tempArray.length <= 44) {
        var stringData = tempArray.join("");
        for (let i = 0; i < stringData.length; i++) {
          // console.log(stringData.length, "stringData");
          if (i < 2) {
            if (stringData.charAt(0) == 0) {
              stringData = stringData.substring(1);
            }
            if (i > 40) {
              if (stringData.charAt(40) == 0) {
                stringData = stringData = stringData.substring(41, 1);
              }
            }
          }
        }
        if (stringData.length === 40) {
          console.log("0x" + stringData, "tempArray");
          settokenAdress("0x" + stringData);
        }
      }

      // if (char != 0) {
      //   tempArray.push(char);
      //   anotherTempArray = [];
      // } else {
      //   if (tempArray.length > 34) {
      //     console.log("0x" + tempArray.join("").slice(0, 35), "tempArray");
      //   } else {
      //     anotherTempArray.push(char);
      //     if (anotherTempArray.length > 3) {
      //       tempArray = [];
      //       anotherTempArray = [];
      //     }
      //   }
      // }
    });
    if (variable && metamaskid) {
      setId(variable);
      setmetamaskID(metamaskid);
    }
  }, [cardData]);
  React.useEffect(() => {
    let result = cardData?.AccountId.concat(cardData?.OrderId);
    setTradeCode(result);
    console.log(result, "orderid");
    let jsonData = JSON.parse(cardData?.Order);

    let jsonArrayData = jsonData.makerAssetData.split("");
    var tempArray = [];
    var anotherTempArray = [];
    jsonArrayData.map((char) => {
      if (char == 0) {
        anotherTempArray.push(char);
        if (anotherTempArray.length >= 3) {
          tempArray = [];
          anotherTempArray = [];
        }
      } else {
        anotherTempArray = [];
      }

      tempArray.push(char);

      if (tempArray.length >= 40 && tempArray.length <= 44) {
        var stringData = tempArray.join("");
        for (let i = 0; i < stringData.length; i++) {
          console.log(stringData.length, "stringData");
          if (i < 2) {
            if (stringData.charAt(0) == 0) {
              stringData = stringData.substring(1);
            }
            if (i > 40) {
              if (stringData.charAt(40) == 0) {
                stringData = stringData = stringData.substring(41, 1);
              }
            }
          }
        }
        if (stringData.length === 40) {
          console.log("0x" + stringData, "tempArray");
          setMakertokenAdress("0x" + stringData);
        }
      }

      // if (char != 0) {
      //   tempArray.push(char);
      //   anotherTempArray = [];
      // } else {
      //   if (tempArray.length > 34) {
      //     console.log("0x" + tempArray.join("").slice(0, 35), "tempArray");
      //   } else {
      //     anotherTempArray.push(char);
      //     if (anotherTempArray.length > 3) {
      //       tempArray = [];
      //       anotherTempArray = [];
      //     }
      //   }
      // }
    });
  }, [cardData]);

  React.useEffect(() => {
    if (id && metaid) {
      axios
        .get(
          `https://apl4mh4j0c.execute-api.us-west-2.amazonaws.com/Prod/api/v1/asset/${id}/${metaid}`
        )
        .then((resp) => {
          console.log(JSON.parse(resp.data), "res");

          setData(JSON.parse(resp.data));
        });
    }
  }, [id, metaid]);
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
    if (tokenAdress) {
      record.map((data) => {
        if (data.tokenadress == tokenAdress) {
          setTakerData(data);
        }
      });
    }
  }, [tokenAdress]);

  const obj = JSON.parse(cardData?.Order);
  //   console.log(obj, "parse");
  // const enableMetamask = async () => {
  //   let accounts = await window.ethereum.enable();
  //   console.log(accounts[0]);
  // };
  const action = () => {
    setValue(false);
    setSingleData(Data);
    setAdress(tokenAdress);
    setmakerAdress(makeTokenAdress);
    setTradenbr(tradecode);
  };
  console.log(tokenAdress, "finalstage");
  return (
    <>
      <Card
        sx={{
          maxWidth: "100%",
          paddingTop: "5px",
          paddingBottom: "5px",
          paddingX: "5px",
          border: "4px solid pink",
          backgroundColor: "lightpink",
          marginY: "10px",
        }}
        onClick={action}
      >
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
              <Typography
                variant="body2"
                sx={{
                  width: "170px",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "180px",
                  padding: "10px",
                }}
              >
                <Typography variant="body2" sx={{ width: "30%" }}>
                  <CardMedia
                    component="img"
                    height="45"
                    image={taker?.image}
                    alt="green iguana"
                  />
                </Typography>
                <Typography sx={{ width: "70%", paddingLeft: "5px" }}>
                  <Typography variant="h6" sx={{ color: "black" }}>
                    {/* {Data?.name} */}
                    {taker?.name}
                  </Typography>
                  {/* <Typography variant="body2">USD Coin</Typography> */}
                  <Typography
                    variant="body2"
                    sx={{ backgroundColor: "black", color: "white" }}
                  >
                    Type:ERC20
                  </Typography>
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={0.25} sm={12} lg={0.25}>
              <Typography variant="body2" sx={{ width: "30%" }}>
                <CompareArrowsIcon />
              </Typography>
            </Grid>

            <Grid item md={5.75} sm={5.75} lg={5.75}>
              <Typography
                variant="body2"
                sx={{
                  width: "170px",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "160px",
                  padding: "10px",
                }}
              >
                <Typography variant="body2" sx={{ width: "30%" }}>
                  <CardMedia
                    component="img"
                    height="50"
                    image={Data?.image_url}
                    alt="green iguana"
                  />
                </Typography>
                <Typography sx={{ width: "70%", paddingLeft: "5px" }}>
                  <Typography variant="h6" sx={{ color: "black" }}>
                    {Data?.name}
                  </Typography>
                  <Typography variant="body2">Amount:1</Typography>
                  <Typography
                    variant="body2"
                    sx={{ backgroundColor: "black", color: "white" }}
                  >
                    Type:ERC721
                  </Typography>
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Typography
          sx={{
            display: "flex",
            backgroundColor: "white",
            color: "black",
            justifyContent: "space-between",
            flexWrap: "wrap",
            paddingX: "50px",
          }}
        >
          <Typography component="div">For:{cardData?.Recipient}</Typography>

          <Typography>Status:{cardData?.Status}</Typography>
          <Typography>Expires in:Expired</Typography>
        </Typography>
      </Card>
    </>
  );
}
