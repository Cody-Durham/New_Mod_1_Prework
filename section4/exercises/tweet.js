/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/


class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timestamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
}
var tweet1 = new Tweet('Kile the Great', './desktop/pic.at the beach with my dog.jpg', '18:39', 50, 5)
  console.log(tweet1);

var tweet2 = new Tweet('Steve', './pics/baby picture 1.jpg', '5:30pm', 17, 56)
  console.log(tweet2);

var tweet3 = new Tweet('Mom', './Iphone/Mt Rushmore.png', '5:45pm', 3, 5)
  console.log(tweet3);

var tweet4 = new Tweet('Steven Crowler', 'Me at my booth.jpg', '1:30pm', 500, [])
  console.log(tweet4);
