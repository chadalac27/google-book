const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI);

const bookSeed = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald’s",
    description:
      "The Great Gatsby is distinguished as one of the greatest texts for introducing students to the art of reading literature critically (which means you may have read it in school). The novel is told from the perspective of a young man named Nick Carraway who has recently moved to New York City and is befriended by his eccentric nouveau riche neighbor with mysterious origins, Jay Gatsby. The Great Gatsby provides an insider’s look into the Jazz Age of the 1920s in United States history while at the same time critiquing the idea of the “American Dream.” Perhaps the most-famous aspect of the novel is its cover art—a piercing face projected onto a dark blue night sky and lights from a cityscape—an image that is also found, in a slightly different configuration, within the text itself as a key symbol.",
    image:
      "https://cdn.britannica.com/s:800x1000/47/24647-050-E6E25F22/F-Scott-Fitzgerald.jpg",
    url: "",
  },
  {
    title: "To Kill A Mockingbird",
    author: "Harper Lee",
    description:
      "Lee’s To Kill a Mockingbird was published in 1960 and became an immediate classic of literature. The novel examines racism in the American South through the innocent wide eyes of a clever young girl named Jean Louise (“Scout”) Finch. Its iconic characters, most notably the sympathetic and just lawyer and father Atticus Finch, served as role models and changed perspectives in the United States at a time when tensions regarding race were high. To Kill a Mockingbird earned the Pulitzer Prize for fiction in 1961 and was made into an Academy Award-winning film in 1962, giving the story and its characters further life and influence over the American social sphere.",
    image:
      "https://cdn.britannica.com/s:800x1000/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
    url: "",
  },
];

db.Books.create(bookSeed[0])
.then(() => db.Books.create(bookSeed[1]))
.then((data)=> {process.exit(0);})
