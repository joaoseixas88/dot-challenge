import { MovieCartCard } from '../MovieCartCart';
import { PrimaryButton } from '../PrimaryButton';
import { Container, Content } from './styles';

interface Props {
  visibility: boolean;
}

export function CartModal({ visibility }: Props) {
  return (
    <Container visibility={visibility}>
      <Content>
        <div className="title-container">
          <div>
            <h4>Meu Carrinho</h4>
          </div>
          <button id="empty-button">Esvaziar</button>
        </div>
        <div className="cards-container">
          <MovieCartCard minify />
          <MovieCartCard minify />
        </div>
        <div className="total-container">
          <h4>Total:</h4>
          <h3>R$ 19,98</h3>
        </div>
        <div className="btn-container">
          <PrimaryButton label="Finalizar" onClick={() => console.log('click')} />
        </div>

      </Content>
    </Container>
  );
}
