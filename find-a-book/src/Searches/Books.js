import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";
import { Input, TextArea, FormBtn } from "../components/Form";

// class Books extends Component {
//     state = {
//       books: []
//     };

//     render() {
//         return(
// <Jumbotron> 
// <h1> Welcome to "Find-A-Book" </h1>
// </Jumbotron>
//         )}



// };

// export default Books;

class Books extends Component {
        state = {
          books: []
        };
      
        componentDidMount() {
          this.loadBooks();
        }
      
        loadBooks = () => {
          API.getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
        };
      
        render() {
          return (
            <Container fluid>
              <Row>
                <Col size="md-6">
                  <Jumbotron>
                    <h1>Search Your Book!</h1>
                  </Jumbotron>
                  <form>
                    <Input name="title" placeholder="Title (required)" />
                    <Input name="author" placeholder="Author (required)" />
                    <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
                    <FormBtn>Submit Book</FormBtn>
                  </form>
                </Col>
                <Col size="md-6 sm-12">
                  <Jumbotron>
                    <h1>Book List</h1>
                  </Jumbotron>
                  {this.state.books.length ? (
                    <BookList>
                      {this.state.books.map(book => (
                        <BookListItem key={book._id}>
                          <a href={"/books/" + book._id}>
                            <strong>
                              {book.title} by {book.author}
                            </strong>
                          </a>
                          <DeleteBtn />
                        </BookListItem>
                      ))}
                    </BookList>
                  ) : (
                    <h3>No Results to Display</h3>
                  )}
                </Col>
              </Row>
            </Container>
          );
        }
      }
      
      export default Books;
  
