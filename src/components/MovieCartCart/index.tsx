import { FaTrash } from 'react-icons/fa';
import { useTheme } from 'styled-components';

export function MovieCartCard() {
  const { colors } = useTheme();
  return (
    <tr>
      <td style={{ textAlign: 'left' }}>
        <img
          src="https://picsum.photos/200/300"
          alt="title"
          width={68}
          height={60}
        />
      </td>
      <td style={{ textAlign: 'left' }}>Nome do filme</td>
      <td style={{ textAlign: 'center' }}>1</td>
      <td style={{ textAlign: 'center' }}>R$9,99</td>
      <td style={{ textAlign: 'right' }}>
        <FaTrash color={colors.primaryGray} />
      </td>
    </tr>
  );
}
