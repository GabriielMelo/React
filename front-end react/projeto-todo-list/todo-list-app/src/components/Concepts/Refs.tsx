import { FormEvent, useRef } from "react";

export const Refs: React.FC = () => {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const InputPasswordRef = useRef<HTMLInputElement>(null);

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(inputNameRef.current?.value);
    console.log(inputEmailRef.current?.value);
    console.log(InputPasswordRef.current?.value);
  }
  return (
    <form
      style={{ padding: "2rem" }}
      onSubmit={(event) => handleOnSubmit(event)}
    >
      <h1>UseRef</h1>
      <br />
      <input type="text" placeholder="Nome Completo:" ref={inputNameRef} />
      <input type="email" placeholder="Email:" ref={inputEmailRef} />
      <input type="password" placeholder="Senha:" ref={InputPasswordRef} />
      <br />
      <button type="submit"> Enviar</button>
    </form>
  );
};
