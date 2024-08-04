import React, { useContext } from "react";
import { DataContext } from "../../Context/Dataprovider";

// component
import { Grid } from "@mui/material";
import Banner from "../Banner/banner";
import Categories from "./categories";

const Home = () =>
{
    const { Display_User_Name } = useContext(DataContext);

    return (
      <>
        <Banner />
        <Grid container>
          <Grid item lg={2} sm={2} xs={12}>
            <Categories />
          </Grid>
          <Grid container item lg={2} sm={2} xs={4}>
            Post
          </Grid>
        </Grid>
      </>
    );
}

export default Home;
