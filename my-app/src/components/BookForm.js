import { Form , Field} from 'react-final-form';
import React from 'react';
import {Form as Rform , FormGroup, FormControl, ControlLabel, HelpBlock , ButtonToolbar , Button , Schema } from 'rsuite';
const {StringType , NumberType} = Schema.Types;
const model = Schema.Model({
    name: StringType().isRequired('This field is required'),
    price: NumberType().isRequired('This field is required'),
});
const BookForm = props => {
    const initialFormState = {id: '' , name: '' , category: '' , price: '', author:''}
    const [book , setBook] = React.useState(initialFormState);
    const handleSubmit = e => {
        e.preventDefault();
        if(!book.name || !book.category || !book.price) return 
        props.addBook(book);
        setBook(initialFormState);
    }
    const validate = values => {
        const errors = {};
        if(!values.name) {
            errors.name = 'Required';
        }
        if(!values.bookcategory) {
            errors.category = 'Required';
        }
        if(!values.bookprice) {
            errors.price = 'Required';
        }
        return errors;
    };
    return (
        <Form 
        onSubmit={handleSubmit}
        initialValues = {book}
        validate={validate}
        render={({
            handleSubmit , submitting , values , pristine, form }) => (
                <Rform model={model} onSubmit={handleSubmit}>
                    <div style={{margin:'1rem auto'}}>
                        <Field name="name">
                        {({input , meta}) => (
                            <FormGroup > 
                            <ControlLabel>Book Name</ControlLabel>
                            <FormControl name='name' {...input}></FormControl>
                            {meta.error && meta.touched && <HelpBlock>{meta.error}</HelpBlock>}
                            </FormGroup>
                        )}
                        </Field>
                    </div>
                    <div style={{margin:'1rem auto'}}>
                        <Field name="category">
                        {({input , meta}) => (
                            <FormGroup> 
                            <ControlLabel>Book Category</ControlLabel>
                            <FormControl name='category' {...input}></FormControl>
                            {meta.error && meta.touched && <HelpBlock>{meta.error}</HelpBlock>}
                            </FormGroup>
                        )}
                        </Field>
                    </div>
                    <div style={{margin:'1rem auto'}}>
                        <Field name="price" >
                        {({input , meta}) => (
                            <FormGroup> 
                            <ControlLabel>Book Price</ControlLabel>
                            <FormControl name='price' {...input}></FormControl>
                            {meta.error && meta.touched && <HelpBlock>{meta.error}</HelpBlock>}
                            </FormGroup>
                        )}
                        </Field>
                    </div>
                    <div style={{margin:'1rem auto'}}>
                        <Field name="author" >
                        {({input , meta}) => (
                            <FormGroup> 
                            <ControlLabel>Book Author</ControlLabel>
                            <FormControl name='author' {...input}></FormControl>
                            {meta.error && meta.touched && <HelpBlock>{meta.error}</HelpBlock>}
                            </FormGroup>
                        )}
                        </Field>
                    </div>
                    <ButtonToolbar>
                        <Button appearance="primary" type="submit" disabled={submitting || pristine}>Submit</Button>
                        <Button appearance="default" onClick={form.reset} disabled={submitting || pristine}>Cancel</Button>
                    </ButtonToolbar>
                    <pre>{JSON.stringify(values,0,2)}</pre>
                </Rform>
            ) 
        }
        />
        )
    }
    export default BookForm;