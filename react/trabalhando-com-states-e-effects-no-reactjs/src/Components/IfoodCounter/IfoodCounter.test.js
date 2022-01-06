import IfoodCounter from './IfoodCounter';
import {render, screen, fireEvent} from '@testing-library/react';

test('Render the IfoodCounter with 2 buttons and a value', () => {
    let initialValue = 0;
    render(<IfoodCounter></IfoodCounter>);
    const buttonIncreaseEl = screen.getByRole('button', {name: 'Increase'});
    const buttonDecreaseEl = screen.getByRole('button', {name: 'Decrease'});
    let valueEl = screen.getByText(initialValue);

    expect(buttonIncreaseEl).toBeInTheDocument();
    expect(buttonDecreaseEl).toBeInTheDocument();
    expect(valueEl).toBeInTheDocument();
});

test('Render the IfoodCounter with 2 buttons and a value and increase the value', () => {
    let initialValue = 0;
    render(<IfoodCounter></IfoodCounter>);
    const buttonIncreaseEl = screen.getByRole('button', {name: 'Increase'});
    const buttonDecreaseEl = screen.getByRole('button', {name: 'Decrease'});
    
    expect(buttonIncreaseEl).toBeInTheDocument();
    
    fireEvent.click(buttonIncreaseEl);
    let valueEl = screen.getByText(initialValue+1);
    expect(valueEl).toBeInTheDocument();
});


test('Render the IfoodCounter with 2 buttons and a value and check constraint, value cant go below 0', () => {
    let initialValue = 0;
    render(<IfoodCounter></IfoodCounter>);
    const buttonIncreaseEl = screen.getByRole('button', {name: 'Increase'});
    const buttonDecreaseEl = screen.getByRole('button', {name: 'Decrease'});
    
    expect(buttonIncreaseEl).toBeInTheDocument();
    
    fireEvent.click(buttonDecreaseEl);
    let valueEl = screen.getByText(initialValue);
    expect(valueEl).toBeInTheDocument();
});


test('Render the IfoodCounter with 2 buttons and a value and decrease the value', () => {
    let initialValue = 10;
    render(<IfoodCounter initialValue={initialValue}></IfoodCounter>);
    const buttonIncreaseEl = screen.getByRole('button', {name: 'Increase'});
    const buttonDecreaseEl = screen.getByRole('button', {name: 'Decrease'});
    
    expect(buttonIncreaseEl).toBeInTheDocument();
    
    fireEvent.click(buttonDecreaseEl);
    let valueEl = screen.getByText(initialValue-1);
    expect(valueEl).toBeInTheDocument();
});