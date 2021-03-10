import React from 'react';
import { Form , Field} from 'react-final-form';
import {Form as Rform , ControlLabel, Input, ButtonToolbar , Button  } from 'rsuite';

const TextFieldAdapter = ({input , meta , ...rest}) => (
    <Input {...input} {...rest} onChange = {value => input.onChange(value)}
    errorText={meta.touched ? meta.error : ""} />
)
const EditBook = props => {
    const [currentBook , setCurrentBook] = React.useState(props.currentBook);
    const validate = values => (
        values ? undefined : 'Required'
    );
    const onSubmit = values => {
        window.alert(JSON.stringify(values , 0 ,2));
        props.updateBook(values.id , values);
    }
    return (
        <Form 
        onSubmit={onSubmit}
        initialValues = {currentBook}
        validate={validate}
        render={({
            handleSubmit , values , form}) => (
                <Rform onSubmit={handleSubmit}>
                    <div style={{margin:'1rem auto'}}>
                    <ControlLabel>Book Name</ControlLabel>
                        <Field name="name" 
                        component={TextFieldAdapter}
                        validate={validate}>
                        
                        </Field>
                    </div>
                    <div style={{margin:'1rem auto'}}>
                    <ControlLabel>Book Category</ControlLabel>
                        <Field name="category" 
                        component={TextFieldAdapter}
                        validate={validate}>
                        
                        </Field>
                    </div>
                    <div style={{margin:'1rem auto'}}>
                    <ControlLabel>Book Price</ControlLabel>
                        <Field name="price"
                         component={TextFieldAdapter}
                         validate={validate}/>
                    </div>
                    <div style={{margin:'1rem auto'}}>
                    <ControlLabel>Book Author</ControlLabel>
                        <Field name="author" component={TextFieldAdapter} 
                        validate={validate} >
                        </Field>
                    </div>
                    <ButtonToolbar>
                        <Button appearance="primary" type="submit" onClick={form.submit}>Edit Book</Button>
                        <Button appearance="default" onClick={() => props.setEditing(false)}>Cancel</Button>
                    </ButtonToolbar>
                    <pre>{JSON.stringify(values,0,2)}</pre>
                </Rform>
            ) 
        }
        />
    )
}
export default EditBook ;