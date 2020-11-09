import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ArticleForm = () => {
    const initialState = { title: '', text: ''}
    const [values, setValues] = useState(initialState)
    const handleSubmit = e => {
        e.preventDefault()
        fetch('/article',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        })
        .then(res => {
            if (res.ok) {
                alert('Article successfully created')
                setValues(initialState)
            }
        })
        .catch(error => alert(error))
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Title of your article...' 
                        required={true}
                        onChange={e => setValues({...values, title: e.target.value})}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Text</Form.Label>
                    <Form.Control 
                        as='textarea' 
                        rows ='5' 
                        placeholder='Text for your article...' 
                        required ={true}
                        onChange={e => setValues({...values, text: e.target.value})}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>           
        </div>
    )
};

export default ArticleForm;
