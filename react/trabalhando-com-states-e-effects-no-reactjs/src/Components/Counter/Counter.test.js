import Counter from './Counter';
import { render, screen, fireEvent } from '@testing-library/react';

const ValorInicial = 0;

test('Render a counter with 2 buttons and a value', () => {
    render(<Counter></Counter>);

    const CounterAumentarEl = screen.getByRole('button', {name: 'Aumentar'});
    const CounterDiminuirEl = screen.getByRole('button', {name: 'Diminuir'});
    const CounterValue = screen.getByText(ValorInicial);

    expect(CounterAumentarEl).toBeInTheDocument();
    expect(CounterDiminuirEl).toBeInTheDocument();
    expect(CounterValue).toBeInTheDocument();

});

test('Render a counter with 2 buttons and increase the value', () => {
    render(<Counter></Counter>);

    const CounterAumentarEl = screen.getByRole('button', {name: 'Aumentar'});
    let CounterValue = screen.getByText(ValorInicial);
    
    expect(CounterValue).toBeInTheDocument();
    fireEvent.click(CounterAumentarEl);
    
    CounterValue = screen.getByText(ValorInicial+1);
    expect(CounterValue).toBeInTheDocument();
});

test('Render a counter with 2 buttons and decrease the value', () => {
    render(<Counter></Counter>);

    const CounterDiminuirEl = screen.getByRole('button', {name: 'Diminuir'});
    let CounterValue = screen.getByText(ValorInicial);
    
    expect(CounterValue).toBeInTheDocument();
    fireEvent.click(CounterDiminuirEl);
    
    CounterValue = screen.getByText(ValorInicial-1);
    expect(CounterValue).toBeInTheDocument();
});