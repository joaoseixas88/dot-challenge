import { MovieCartCard } from '../MovieCartCart';
import { Container, Content } from './styles';

interface Props {
  visibility: boolean;
}

export function FavoriteModal({ visibility }: Props) {
  return (
    <Container visibility={visibility}>
      <Content>
        <div className="title-container">
          <div>
            <h4>Meus Favoritos</h4>
          </div>
          <button id="empty-button">Esvaziar</button>
        </div>
        <div className="cards-container">
          <MovieCartCard minify />
          <MovieCartCard minify />
        </div>
      </Content>
    </Container>
  );
}
