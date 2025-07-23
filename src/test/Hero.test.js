import React from 'react';
import { render, screen } from '@testing-library/react';


import Hero from '../landing_page/home/Hero';

test('renders hero image', () => {
  render(<Hero />);
  console.log(screen.debug()); 

  const heroImage = screen.getByAltText("Hero Image");
  expect(heroImage).toBeInTheDocument();
  expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');
});
