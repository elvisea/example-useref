import { useRouter } from 'next/router';
import { ButtonHTMLAttributes, FormEvent, InputHTMLAttributes, useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: center;
  height: 100vh;
  background: #7159c1;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: auto;
`;

const Input = styled.input`
  height: 30px;
  border-radius: 5px;
  border: 1px solid #000;
  margin-bottom: 8px;
  width: 100%;

  &:last-child {
    margin-bottom: 0px;
  }
`;

const Button = styled.button`
  margin-top: 8px;
  height: 30px;
  width: 180px;
  border-radius: 5px;
  border: none;
`;

export default function Home() {

  const router = useRouter()

  const data = router.query
  console.log(data)

  const handleClick = () => {
    router.back()
  }

  return (
    <Container>
      <Title>{data.email}</Title>
      <Title>{data.password}</Title>
      <Button onClick={handleClick}>Voltar</Button>
    </Container>
  )
};
