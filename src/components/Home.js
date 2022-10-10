import { useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import axios from "axios";
import Button from "@mui/material/Button";
import * as React from "react";

import { useWeb3React } from "@web3-react/core";
import { injected } from "./wallet/connector";
import MainCard from "./MainCard";
import FormLayoutsSeparator from "./Form";
import TemporaryDrawer from "./Drawer";
import { Grid } from "@mui/material";

function Home() {
  const [data, setData] = useState();
  const [adress, setAdress] = useState();
  const [makeradress, setmakerAdress] = useState();
  const [Value, setValue] = React.useState(true);
  const [SignleData, setSingleData] = React.useState();
  const [Tradenbr, setTradenbr] = React.useState();

  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  var array = [2, 4, 6, 8];
  // var arrayobj = [
  //   { id: 1, name: "a" },
  //   { id: 1, name: "b" },
  //   { id: 2, name: "a" },
  // ];

  // var newnbr = 70;
  // var position = 2;

  useEffect(() => {
    var array2 = [];
    var array3 = [];
    // array.map((data) => {

    // });
    // arrayobj.map((data) => {
    //   let exist = true;
    //   array2.map((data2) => {
    //     if (data.id == data2.id) {
    //       exist = false;
    //     }
    //   });
    //   if (exist == true) {
    //     array2.push(data);
    //   }
    // });
    // console.log(array2, "array2");

    // for (let i = array.length - 1; i > 0; i--) {
    //   if (i >= 2) {
    //     array[i + 1] = array[i];
    //     if (i == 2) {
    //       array[i] = 456;
    //     }
    //   }
    // }
    // console.log(array);
    // for (let i = position; i < array.length - 1; i++) {
    //   array[i] = array[i + 1];
    // }
    // array.length = array.length - 1;
    // console.log(array, "ARRAY");
    // for (let i = 0; i < array.length; i++) {
    //   if (array[i] == 10) {
    //     array3.push(array[i]);
    //   } else {
    //     array2.push(array[i]);
    //   }
    // }
    // console.log(array2, "without");
    // console.log(array3, "eeee");
  }, []);

  // var response = await axios(config)
  //   .then(async function (response) {
  //     // data=await JSON.stringify(response.data);
  //     // setstates_array(data_arr)
  //     return response.data;

  //   })

  //   .catch(function (error) {
  //     console.log(error);
  //   });

  useEffect(() => {
    if (account) {
      var tempArray = [];
      axios
        .get(
          `https://apl4mh4j0c.execute-api.us-west-2.amazonaws.com/Prod/orders?Recipient=${account.toLowerCase()}`
        )
        .then((resp) => {
          if (resp.data) {
            resp?.data?.map((data) => {
              tempArray.push(data);
            });
          }
          axios
            .get(
              `https://apl4mh4j0c.execute-api.us-west-2.amazonaws.com/Prod/orders?AccountId=${account.toLowerCase()}`
            )
            .then((resp) => {
              // setAccountData(resp.data);
              if (resp?.data) {
                resp?.data?.map((data) => {
                  tempArray.push(data);
                });
              }
              setData(tempArray);
            });
        });
    }
  }, [account]);

  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem("isWalletConnected", true);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", false);
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <>
      {account ? (
        <Button onClick={disconnect}>Disconnect</Button>
      ) : (
        <Button onClick={connect}>Connect</Button>
      )}
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
          <Grid item md={12} sm={12} lg={12}>
            {Value ? (
              <>
                {data &&
                  data?.map((cardData) => {
                    return (
                      <>
                        <MainCard
                          cardData={cardData}
                          setValue={setValue}
                          setSingleData={setSingleData}
                          setAdress={setAdress}
                          setmakerAdress={setmakerAdress}
                          setTradenbr={setTradenbr}
                        />
                      </>
                    );
                  })}
              </>
            ) : (
              <>
                <MediaCard
                  SignleData={SignleData}
                  adress={adress}
                  makeradress={makeradress}
                  Tradenbr={Tradenbr}
                />
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
