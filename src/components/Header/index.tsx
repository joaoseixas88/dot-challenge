import { BsSearch } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { Container, Icons, SearchBox } from './styles';

export function Header() {
  return (
    <Container>
      <div>
        <h2>LOGO</h2>
      </div>
      <SearchBox>

        <div>
          <input />
          <BsSearch />
        </div>
      </SearchBox>
      <Icons>
        <AiFillHeart color="white" size={24} />
        <RiShoppingCart2Fill color="white" size={24} />
      </Icons>
    </Container>
  );
}
