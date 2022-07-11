import { Form, StyledLabel, Button } from "./styles";
import { FiArrowDownRight as ArrowIcon } from "react-icons/fi";

export const ContactForm = () => {
  return (
    <Form>
      <StyledLabel style={{ gridArea: "name" }}>
        Nome:
        <input type="text" name="name"></input>
      </StyledLabel>

      <StyledLabel style={{ gridArea: "email" }}>
        E-mail:
        <input type="email" name="email"></input>
      </StyledLabel>

      <StyledLabel style={{ gridArea: "tel" }}>
        Telefone:
        <input type="tel" name="tel"></input>
      </StyledLabel>

      <StyledLabel style={{ gridArea: "message" }}>
        Mensagem:
        <textarea name="message"></textarea>
      </StyledLabel>

      <Button type="button">
        Enviar <ArrowIcon />
      </Button>
    </Form>
  );
};
