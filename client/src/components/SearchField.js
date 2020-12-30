import {Paper,Button,Grid,Typography,TextField} from "@material-ui/core";
import React, { useState } from "react";
import axios from 'axios';

const SearchField = (props) => {

    const [searchField, setSearchField] = useState("");


    function onSearch(){
        search();
    }

    function onChange(e)
    {
        setSearchField(e.target.value);
        search();
    }

    function search()
    {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchField}`)
        .then((res) =>{
            let formattedBooks= []
            res.data.items.map((book) => {
                formattedBooks.push({title:book.volumeInfo.title, author: book.volumeInfo.authors[0],description:book.volumeInfo.description,image: book.volumeInfo.imageLinks.thumbnail, alt:"", key:book.id });
                return ""
            })
            props.setBooks(formattedBooks)
           
        })
        .catch((err) => {
            console.log(err);
        })
    }


  return (
    <div>
      <Paper style={{ margin: "1.5rem" }}>
        <Grid style={{ margin: "1.5rem",paddingTop:"2rem" }}>
          <Grid container justify="space-between" direction="column" spacing={3} >
            <Typography component="h2">Book Search</Typography>
            <Typography>Book</Typography>
            <Grid item sm={12}>
              <TextField
                onChange={onChange}
                name="search"
                fullWidth={true}
                style={{ border: "black", borderStyle: "groove" }}
              ></TextField>
            </Grid>
            <Grid container justify="flex-end">
                <Button onClick={onSearch} style={{border: "black", borderStyle: "groove", marginBottom:"1.5rem"}}>Search</Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SearchField;
