// ** React Imports
import { forwardRef, useState } from "react";

// ** MUI Imports
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

// ** Third Party Imports

// ** Icons Imports

import axios from "axios";

const CustomInput = forwardRef((props, ref) => {
  return (
    <TextField
      fullWidth
      {...props}
      inputRef={ref}
      label="Birth Date"
      autoComplete="off"
    />
  );
});

const FormLayoutsSeparator = ({
  takerAssets,
  SignleData,
  adress,
  Tradenbr,
  makeradress,
}) => {
  const navigate = useNavigate();
  // ** States

  const [trade, setTradeNbr] = useState(Tradenbr);
  const [AdminWallet, setAdminWallet] = useState();
  const [makerImageURL, setMakerImageURL] = useState(
    SignleData?.image_preview_url
  );
  const [takerImageURL, setTakerImageURL] = useState(takerAssets?.image_url);

  const [nftnname, setNftnname] = useState(SignleData?.name);
  const [Tokenname, setTokenname] = useState(takerAssets?.name);
  const [Coinname, setCoinname] = useState(adress);
  const [Nftadress, setNftadress] = useState(makeradress);
  // const [Tokenname, setTokenname] = useState(takerAssets?.name);
  const [companyname, setCompanyname] = useState(takerAssets?.name);

  const [category, setCategory] = useState([]);
  const formData = new FormData();

  //   formData.append("photos", CoinImageSrc);

  const handleSelectChange = (event) => {
    setCategory(event.target.value);
  };
  console.log(adress);

  const submit = async (event) => {
    formData.append("nftnname", nftnname);
    formData.append("Tokenname", Tokenname);
    formData.append("Coinname", Coinname);
    formData.append("Nftadress", Nftadress);
    event.preventDefault();
    // axios
    //   .post(
    //     "http://localhost:5000/student",
    //     { body: nftnname },
    //     {
    //       headers: {
    //         "content-type": "multipart/form-data",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     const persons = res.data;
    //     console.log(persons);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    const res = await axios.post(
      // "http://localhost:5000/student",
      "https://nfttrader1.herokuapp.com/student",
      {
        nftnname,
        Tokenname,
        Coinname,
        Nftadress,
        trade,
        AdminWallet,
        takerImageURL,
        makerImageURL,
      }

      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
    );
    if (res) {
      navigate("/record");
    }
  };

  return (
    <Card>
      <CardHeader title="ADD " titleTypographyProps={{ variant: "h6" }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={(e) => submit(e)}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Trade Code
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label=" Trade Code"
                value={trade}
                placeholder="..."
                onChange={(e) => setTradeNbr(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Wallet
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label=" Wallet"
                value={AdminWallet}
                placeholder="..."
                onChange={(e) => setAdminWallet(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Taker Name
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Maker Name
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                label="Taker Name"
                value={Tokenname}
                placeholder="..."
                onChange={(e) => setTokenname(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                label="  Maker Name"
                placeholder="..."
                value={nftnname}
                onChange={(e) => setNftnname(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Taker Adress
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Maker Adress
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                label=" Taker Adress"
                placeholder="..."
                value={Coinname}
                onChange={(e) => setCoinname(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                label="  Maker Adress"
                placeholder="..."
                value={Nftadress}
                onChange={(e) => setNftadress(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Taker Image URL
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Maker Image URL
              </Typography>
            </Grid>

            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                label="  Taker Image URL"
                placeholder="..."
                value={takerImageURL}
                onChange={(e) => setTakerImageURL(e.target.value)}
              />
            </Grid>

            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                label=" Maker Image URL"
                placeholder="..."
                value={makerImageURL}
                onChange={(e) => setMakerImageURL(e.target.value)}
              />
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Button size="large" type="submit" sx={{ mr: 2 }} variant="contained">
            ADD
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default FormLayoutsSeparator;
