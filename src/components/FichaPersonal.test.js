import { render, screen } from '@testing-library/react';
import FichaPersonal from './FichaPersonal';

describe('FichaPersonal', () => {
  it('debe mostrar el texto de la ficha', () => {
    render(<FichaPersonal />);
    const title = screen.getByText(/esta es la ficha de personal/i);
    expect(title).toBeInTheDocument();
  });
});
