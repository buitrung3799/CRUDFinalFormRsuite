import './App.css';
import React , { useState } from 'react';
import {Container  , Header , Content} from 'rsuite';
import {FlexboxGrid} from 'rsuite';
import BooksTable from './components/booksTable';
import 'rsuite/dist/styles/rsuite-default.css';
import BookForm from './components/BookForm';
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
      if(books.length !== 0 ) {
        book.id = books[books.length-1].id + 1;
        setBooks([...books , book]);
      }
      if(books.length === 0 ) {
        book.id = books.length + 1;
        setBooks([...books , book]);
      }
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
    const searchSpace = value => {
      let keyword = value;
      setSearch(keyword);
      console.log(keyword)
    }
  return (
    <div className="App">
      <Container>
        <Header>
            <h2 style={{textAlign: 'center'}}>CRUD App with <span style={{color: '#297DB9'}}>R<span style={{color:'#B92966'}}>SUITE</span></span> and <span style={{color: '#E2D01B'}}>Final Form</span></h2>
        </Header>
        <Content style={{margin:'1rem auto'}}>
          <FlexboxGrid justify='space-around' align='top'>
            <FlexboxGrid.Item colspan={10}>
              <BookForm  currentBook={currentBook} updateBook={updateBook} setEditing={setEditing} addBook={addBook} editing={editing} />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={13}>
              <h2>View Books</h2>
              <BooksTable books={books} deleteBook={deleteBook} toggleEdit={toggleEdit} searchSpace={searchSpace} search={search}/>
            </FlexboxGrid.Item>
            </FlexboxGrid>
        </Content>
      </Container>
    </div>
  );
}

export default App;
