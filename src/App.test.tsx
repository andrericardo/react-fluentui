import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';

describe('something truthy and falsy', () => {
    it('true to be true', () => {
        expect(true).toBe(true);
    });

    it('false to be false', () => {
        expect(false).toBe(false);
    });
});


import { App } from './App';

describe('App', () => {
    it('renders product name', async () => {
        render(<App />);

        // screen.debug();

        // check if App components renders headline
        await waitFor(() => {
            const linkElement = screen.getByText(/Product name/i);

            expect(linkElement).toBeInTheDocument();
        });
    });
});