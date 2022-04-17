import { useState } from 'react';
import styled from 'styled-components';

const options = [
  { value: 'test1', label: 'test1' },
  { value: 'test2', label: 'test2' },
  { value: 'test3', label: 'test3' },
];

export default () => {
  const [items, setItems] = useState(options);
  const [data, setData] = useState({
    topic: '',
    firstName: '',
    lastName: '',
    email: '',
  });
  const { topic, firstName, lastName, email } = data;

  const selectedOption = () => {};

  const changeHandler = (e) => {
    console.log('e.target.value', e.target.value);
  };
  const submitHandler = (e) => {
    console.log('e.target.value', e.target.value);
  };
  return (
    <LOGIN>
      <Container>
        <Header>
          <TextTitle>Register for a Webinar now</TextTitle>
          <Text>
            Please fill in the form below and you will be contacted by one of
            our professional business experts.
          </Text>
        </Header>
        <Content>
          <Form onSubmit={submitHandler}>
            <Item>
              <Text>Topic</Text>
              <select onChange={(e) => changeHandler(e)}>
                {items.map(({ value, label }) => {
                  return (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  );
                })}
              </select>
            </Item>
            <Item>
              <Text>First Name</Text>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={changeHandler}
              />
            </Item>
            <Item>
              <Text>Last Name</Text>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={changeHandler}
              />
            </Item>
            <Item>
              <Text>Email</Text>
              <input
                type="email"
                name="email"
                value={email}
                onChange={changeHandler}
              />
            </Item>
            <input type="submit" name="submit" value={'Register'} />
          </Form>
        </Content>
      </Container>
    </LOGIN>
  );
};

const LOGIN = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  width: 80%;
  height: 80%;
  padding: 3rem;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  box-shadow: 0px 4px 14px rgba(132, 132, 132, 0.5);
  border-radius: 20px;
`;

const Header = styled.div`
  text-align: center;
`;

const TextTitle = styled.div`
  font-size: 1.2rem;
  color: #01254f;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Text = styled.div`
  color: rgba(0, 0, 0, 0.65);
  line-height: 1.5rem;
  font-size: 1rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const Form = styled.form`
  text-align: center;
  width: 100%;
`;

const Item = styled.div`
  margin: 1rem 0;
  width: 100%;
  > * {
    text-align: left;
    width: 100%;
    box-sizing: border-box;
  }
`;
