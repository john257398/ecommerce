import React, { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function SearchBox() {
  const history = useHistory();
  const [query, setQuery] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    history.push(query ? `/search/?query=${query}` : "/search");
  };
  return (
    <div>
      <Form className='d-flex me-auto' onSubmit={submitHandler}>
        <InputGroup>
          <FormControl
            type='text'
            name='q'
            id='q'
            onChange={(e) => setQuery(e.target.value)}
            placeholder='search products...'
            aria-label='Search Products'
            aria-describedby='button-search'
          ></FormControl>
          <Button variant='outline-primary' type='submit' id='button-search'>
            <i className="fas fa-search"></i>

          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}
