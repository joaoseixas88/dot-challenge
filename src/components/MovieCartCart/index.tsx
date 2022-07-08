import { FaTrash } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import './styles.css';

interface Props {
  minify?: boolean;
}
export function MovieCartCard({ minify = false }: Props) {
  const { colors } = useTheme();
  return (
    <tr className={minify ? 'minify' : ''}>
      <td style={{ textAlign: 'left' }}>
        <img
          src="https://picsum.photos/200/300"
          alt="title"
          width={minify ? 32 : 68}
          height={minify ? 32 : 68}
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
