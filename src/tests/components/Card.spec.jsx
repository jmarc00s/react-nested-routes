import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../../components/card/Card';

describe('CardComponent', () => {
  it('should render card component', () => {
    const element = render(<Card />);
    expect(element).toBeTruthy();
  });

  it('shoud render card body with text "Test"', () => {
    render(
      <Card>
        <Card.Body>Test</Card.Body>
      </Card>
    );
    const cardBody = screen.getByText('Test');

    expect(cardBody).toBeTruthy();
  });

  it('should render card title with text "Test"', () => {
    render(
      <Card>
        <Card.Title>Test</Card.Title>
      </Card>
    );

    const cardTitle = screen.getByRole('heading', { name: 'Test' });
    expect(cardTitle).toBeTruthy();
  });

  it('should render card image', () => {
    const src = 'img/img.png';
    const alt = 'Test';
    render(
      <Card>
        <Card.Image src={src} alt={alt} />
      </Card>
    );

    expect(screen.getByAltText(alt)).toHaveAttribute('src', src);
  });
});
