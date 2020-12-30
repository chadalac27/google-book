import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Navigation from "../components/Navigation";
import BookList from "../components/BookList";
import API from '../utils/API';

const Home = (props) => {
  
  const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        API.getBooks().then((res) =>{
            setSavedBooks(res.data);
        });
    },[]);

  return (
    <div>
      <Navigation />
      <Grid xs={12} container direction="column">
        <BookList actionName="Delete" books={savedBooks} setBooks={setSavedBooks} title="Saved Books" />
      </Grid>
    </div>
  );
};

export default Home;
