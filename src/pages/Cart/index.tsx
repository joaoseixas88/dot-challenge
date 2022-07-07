import Input from '../../components/Input';
import { MovieCartCard } from '../../components/MovieCartCard';
import {
  CartContainer, Container, Content, Form
} from './styles';

export function Cart() {
  return (
    <Container>
      <div>
        <h1>Finalizar Compra</h1>
      </div>
      <Content>
        <Form>
          <Input placeholder="Nome completo" />
          <div>
            <Input placeholder="CPF" />
            <Input placeholder="Celular" />
          </div>
          <Input placeholder="E-mail" />
          <div>
            <Input placeholder="CEP" />
            <Input placeholder="Endereço" />
          </div>
          <div>
            <Input placeholder="Cidade" />
            <Input placeholder="Estado" />
          </div>
        </Form>
        <CartContainer>
          <div>
            <table>
              <th>
                <td>Imagem</td>
                <td>Nome</td>
                <td>Qtd</td>
                <td>Preço</td>
              </th>
              <tbody>
                <MovieCartCard />
              </tbody>
            </table>
          </div>
          <div>
            <div>
              <h2>Total</h2>
            </div>
            <div>
              <h1>Preço</h1>
            </div>
          </div>
        </CartContainer>
      </Content>
    </Container>
  );
}
