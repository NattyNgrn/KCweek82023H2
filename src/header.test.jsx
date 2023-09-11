//import { expectTypeOf } from "vitest";
import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Header from "./components/header.jsx";

test("renders header component", () => {
    
    const { getByText } = render(<Header />);
    const header1Element = getByText(/Hello Techtonica!/i);
    const header2Element = getByText(/This is a Gratitude List/i);

    expect(header1Element).toBeDefined();
    expect(header2Element).toBeDefined();
});


