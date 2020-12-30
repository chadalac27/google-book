import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Navigation from "../components/Navigation";
import BookList from "../components/BookList";
import SearchField from '../components/SearchField';

const Search = (props) => {
  const [searchBooks, setsearchBooks] = useState([]);

  return (
    <div>
      <Navigation />
      <Grid container direction="column">
        <SearchField books={searchBooks} setBooks={setsearchBooks}/>
        <BookList actionName="Add" books={searchBooks} setBooks={setsearchBooks} title="Results" />
      </Grid>
    </div>
  );
};

export default Search;
