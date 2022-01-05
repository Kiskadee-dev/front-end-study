import { fireEvent, render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import App from './App';

const response = {
  speaker: 'Speaker',
  quote: 'test quote'
};

const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
    return res(ctx.json(response));
  })
);

beforeAll( () => server.listen() );
afterEach( () => server.resetHandlers() );
afterAll( () => server.close() );

test('render app with a button, a quote and text', () => {
  render (<App />);

  const buttonEl = screen.getByRole('button');
  const imgEl = screen.getByRole('img');
  const textEl = screen.getByText(/loading speaker/);

  expect(imgEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
});

test('Calls api on button click and update its text', async () => {
  render (<App />);

  const buttonEl = screen.getByRole('button');
  fireEvent.click(buttonEl);

  const quoteEl = await screen.findByText(response.quote);
  
  expect(quoteEl).toBeInTheDocument();
});

test('Calls api on startup and renders its response', async () => {
  render(<App />);

  const quoteEl = await screen.findByText(response.quote);
  expect(quoteEl).toBeInTheDocument();
});