import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

describe('Sanity', () => {
    it('renders jsx', () => {
        const { getByText } = render(<div>Hello</div>);
        expect(getByText('Hello')).toBeDefined();
    });
});
