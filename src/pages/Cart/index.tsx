import Input from '../../components/Input';
import { MovieCartCard } from '../../components/MovieCartCart';
import { PrimaryButton } from '../../components/PrimaryButton';
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
          <div className="table-container">
            <table>
              <tr>
                <th style={{ textAlign: 'left' }}>Imagem</th>
                <th style={{ textAlign: 'left' }}>Nome</th>
                <th style={{ textAlign: 'center' }}>Qtd</th>
                <th style={{ textAlign: 'center' }}>Preço</th>
                <th />
              </tr>
              <MovieCartCard />
              <MovieCartCard />
            </table>
          </div>
          <div className="total-container">
            <div>
              <h2>Total</h2>
            </div>
            <div>
              <h1>Preço</h1>
            </div>
          </div>
          <PrimaryButton label="Finalizar" onClick={() => console.log('Finalizar')} />
        </CartContainer>
      </Content>
    </Container>
  );
}
