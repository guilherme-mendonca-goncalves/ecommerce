import { screen } from '@testing-library/dom';
import DefaultButton from './DefaultButton';
import { renderWith } from '@src/utils';

describe('DefaultButton Component', () => {
  it('should render correctly', () => {
    renderWith(
      <DefaultButton label="Test" onClick={() => {}} />
    );

    const element = screen.getByTestId('default-button');
    expect(element).toBeInTheDocument();
  });
});
