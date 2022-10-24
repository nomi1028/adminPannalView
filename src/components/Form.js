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
import moment from "moment";

// ** Third Party Imports

// ** Icons Imports

import axios from "axios";
import { Tooltip } from "@mui/material";

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
  iconUrl,
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
  const [NftIcon, setNftIconurl] = useState();
  const [Eth, setEth] = useState();
  const [ClientIcon, setClientIconurl] = useState();
  const [NftIcontrade, setNfttradeIconurl] = useState();
  const [ClientIcontrade, setClienttradeIconurl] = useState();
  const [time, setTime] = useState(
    moment.unix(iconUrl).format(moment.HTML5_FMT.DATETIME_LOCAL)
  );

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
        NftIcon,
        ClientIcon,
        NftIcontrade,
        ClientIcontrade,
        time,
        Eth,
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
  console.log(
    moment.unix(iconUrl).format(moment.HTML5_FMT.DATETIME_LOCAL),
    "iconUrl"
  );
  console.log(time, "format");

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
                Taker Assets Address
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Maker Assets Address
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                label=" Taker Assets Address"
                placeholder="..."
                value={
                  Coinname?.length > 42 ? Coinname?.slice(0, 42) : Coinname
                }
                onChange={(e) => setCoinname(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Tooltip
                title="number length not be greater than 42"
                // followCursor
              >
                <TextField
                  fullWidth
                  label="  Maker Assets Address"
                  placeholder="..."
                  value={
                    Nftadress.length > 42 ? Nftadress.slice(0, 42) : Nftadress
                  }
                  onChange={(e) => setNftadress(e.target.value)}
                />
              </Tooltip>
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
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                NFT Detail Icon URL
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Client Detail Icon URL
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                label="  NFT Icon URL"
                placeholder="..."
                value={NftIcon}
                onChange={(e) => setNftIconurl(e.target.value)}
              />
            </Grid>

            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                label=" Client Icon URL"
                placeholder="..."
                value={ClientIcon}
                onChange={(e) => setClientIconurl(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                NFT trade Icon URL
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Client trade Icon URL
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                label="  NFT trade Icon URL"
                placeholder="..."
                value={NftIcontrade}
                onChange={(e) => setNfttradeIconurl(e.target.value)}
              />
            </Grid>

            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                label=" Client trade Icon URL"
                placeholder="..."
                value={ClientIcontrade}
                onChange={(e) => setClienttradeIconurl(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Expiry Time
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Add Eth
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                // label=" Time"
                // placeholder="..."
                type="datetime-local"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Grid>

            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                // label=" Time"
                // placeholder="..."
                type="text"
                value={Eth}
                onChange={(e) => setEth(e.target.value)}
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
