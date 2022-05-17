import { renderWith } from '@src/utils';
import { fireEvent, screen } from '@testing-library/react';
import Search from './Search';

describe('Search Component', () => {
  it('should render correctly', () => {
    renderWith(
      <Search onChange={() => {}} />
    );

    const element = screen.getByTestId('search');
    expect(element).toBeInTheDocument();
  });

  it('should call onChange correctly, when submit form', () => {
    const onChange = jest.fn();

    renderWith(
      <Search onChange={onChange} />
    );

    fireEvent.change(screen.getByTestId('search-input'), { target: {value: 'ab'} });
    fireEvent.click(screen.getByTestId('search-button'));

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith('ab');
  });

  it('should call onChange correctly', () => {
    const onChange = jest.fn();

    renderWith(
      <Search onChange={onChange} />
    );

    fireEvent.change(screen.getByTestId('search-input'), { target: {value: 'abc'} });

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith('abc');
  });

  it('should call onChange correctly, when blur', () => {
    const onChange = jest.fn();

    renderWith(
      <>
        <button type="button" data-testid="button-test">test</button>
        <Search onChange={onChange} />
      </>
    );

    const input = screen.getByTestId('search-input');
    input.focus();
    expect(input).toHaveFocus();

    const buttonTest = screen.getByTestId('button-test');
    buttonTest.focus();

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith(null);
  });
});
