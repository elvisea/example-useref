import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: center;
  height: 100vh;
  background: #7159c1;

  h1 {
    color: #fff;
    margin-bottom: 16px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    height: auto;

    input {
      height: 30px;
      border-radius: 5px;
      border: 1px solid #000;
      margin-bottom: 8px;
      width: 100%;
      padding: 0 12px;

      &:last-child {
        margin-bottom: 0px;
      }
    }

    button {
      margin-top: 8px;
      height: 30px;
      width: 180px;
      border-radius: 5px;
      border: none;
    }
  }
`;

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>('')

  console.log(`State Email => ${email}`)
  console.log(`State Password => ${password}`)

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  console.log("REF Input Name => ", emailInputRef.current?.value)
  console.log("REF Input PassWord => ", passwordInputRef.current?.value)

  useEffect(() => {
    setEmail(emailInputRef.current?.value)
    setPassword(passwordInputRef.current?.value)
    console.log(`Email UseEffect => ${email}`)
    console.log(`Password UseEffect => ${password}`)
  }, [])

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('segunda-pagina')
  }

  return (
    <Container>
      <form onSubmit={handleClick}>
        <h1>Form</h1>
        <input
          ref={emailInputRef}
          value={email}
          type='email'
          onChange={e => setEmail(e.target.value)}
        />
        <input
          ref={passwordInputRef}
          value={password}
          type='password'
          onChange={e => setPassword(e.target.value)}
        />
        <button type='submit'>Enviar</button>
        <Link 
          href={{
            pathname: 'segunda-pagina',
            query: { email: email, password: password }
          }}
        >
          <a>Enviar</a>
        </Link>
      </form>
    </Container>
  )
};
