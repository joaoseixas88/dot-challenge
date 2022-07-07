import { AiFillStar, AiFillHeart } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { PrimaryButton } from '../PrimaryButton';
import { Container, Image } from './styles';

interface MovieCardProps {
  uri: string;
	isFavorite?: boolean;
}

export default function MovieCard({ uri, isFavorite = false }: MovieCardProps) {
  const { colors } = useTheme();
  return (
    <Container>
      <Image uri={uri}>
        <div className="heart">
          <AiFillHeart color={isFavorite ? colors.shape : colors.primaryGray} size={24} />
        </div>
        <div>
          <p>7 de Janeiro, 2019</p>
        </div>
      </Image>
      <div className="title-container">
        <h3>Titulo</h3>
        <div>
          <div style={{ marginRight: '.7rem' }}>
            <AiFillStar />
            <h4>7</h4>
          </div>
          <h4>Genero</h4>
        </div>
        <h5>Preco</h5>
      </div>
      <div className="btn-container">
        <PrimaryButton label="Adicionar" onClick={() => console.log('click')} />
      </div>
    </Container>
  );
}
