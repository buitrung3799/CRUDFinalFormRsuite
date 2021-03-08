import './App.css';
import React , { useState } from 'react';
import {Container  , Header , Content} from 'rsuite';
import {Navbar} from 'rsuite';
import {FlexboxGrid} from 'rsuite';
import BooksTable from './components/booksTable';
import 'rsuite/dist/styles/rsuite-default.css';
import BookForm from './components/BookForm';
import EditBook from './components/EditBook';
function App() {
  const booksData = [
    {id: 1 , name: 'Doraemon' , category: 'Comic' , price: '10' , author: 'Trung'},
    {id: 2 , name: 'Giao duc cong dan' , category: 'SGK' , price: '9' , author: 'Trung'},
    {id: 3 , name: 'Playboy' , category: 'magazine' , price: '10', author: 'Trung'},
  ];
    const [books , setBooks] = useState(booksData);
    const initialFormState = {id: null , name: '' , category:'' , price: '' , author:''};
    const [currentBook , setCurrentBook] = useState(initialFormState);
    const [search , setSearch] = useState(null);
    const addBook = book => {
      book.id = books.length + 1;
      setBooks([...books , book]);
    }
    const deleteBook = id => {
      setBooks(books.filter(book => book.id !== id));
    }
    const [editing , setEditing] = useState(false);
    const toggleEdit = book => {
      setEditing(true);
      setCurrentBook({id: book.id , name: book.name , category: book.category , price: book.price , author: book.author});
    }
    const updateBook = (id , updatedBook) => {
      setEditing(false);
      setBooks(books.map(book => (
        book.id === id ? updatedBook : book)
      ))
    }
    const searchSpace = e => {
      let keyword = e.target.value;
      setSearch(keyword);
      console.log(keyword)
    }
  return (
    <div className="App">
      <Container>
        <Header>
            <Navbar appearance="inverse">
              <Navbar.Header>
              <h1 style={{textAlign: 'center'}}>CRUD App with <span style={{color: '#297DB9'}}>R<span style={{color:'#B92966'}}>SUITE</span></span> and <span style={{color: '#E2D01B'}}>Final Form</span></h1>
              </Navbar.Header>
            </Navbar>
        </Header>
        <Content>
          <FlexboxGrid justify='space-around' align='top'>
            <FlexboxGrid.Item colspan={10}>
              {
                editing ? (
                  <>
                  <h1>Edit Book Form</h1>
                  <EditBook currentBook={currentBook} updateBook={updateBook} setEditing={setEditing} />
                  </>
                ) : (
                  <>
                  <h1>Add Book Form</h1>
                  <BookForm addBook={addBook} />
                </>
                )
              }
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={10}>
              <h1>View Books</h1>
              <BooksTable books={books} deleteBook={deleteBook} toggleEdit={toggleEdit} searchSpace={searchSpace} search={search}/>
            </FlexboxGrid.Item>
            </FlexboxGrid>
        </Content>
      </Container>
    </div>
  );
}

export default App;
