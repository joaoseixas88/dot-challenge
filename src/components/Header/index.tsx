import { BsSearch } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import { Container, Icons, SearchBox } from './styles';
import { CartModal } from '../CartModal';
import { FavoriteModal } from '../FavoriteModal';

export function Header() {
  const [isOpenCartModal, setIsOpenCartModal] = useState(false);
  const [isOpenFavoriteModal, setIsOpenFavoriteModal] = useState(false);
  const { colors } = useTheme();

  function handleSetCartModal() {
    setIsOpenFavoriteModal(false);
    setIsOpenCartModal(!isOpenCartModal);
  }

  function handleSetFavoriteModal() {
    setIsOpenCartModal(false);
    setIsOpenFavoriteModal(!isOpenFavoriteModal);
  }

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
        <AiFillHeart
          color={colors.shape}
          size={24}
          style={{ cursor: 'pointer' }}
          onClick={() => handleSetFavoriteModal()}
        />
        <div>
          <RiShoppingCart2Fill
            color={colors.shape}
            size={24}
            style={{ cursor: 'pointer' }}
            onClick={() => handleSetCartModal()}
          />
          <div className="total-notification">
            2
          </div>
        </div>
        <CartModal visibility={isOpenCartModal} />
        <FavoriteModal visibility={isOpenFavoriteModal} />
      </Icons>
    </Container>
  );
}
