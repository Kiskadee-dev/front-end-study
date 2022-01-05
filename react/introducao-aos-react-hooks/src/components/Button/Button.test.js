import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with text', () => {
    render (<Button>Test</Button>);
    const buttonText = screen.getByText('Test');
    const buttonEl = screen.getByRole('button');

    expect(buttonText).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
});