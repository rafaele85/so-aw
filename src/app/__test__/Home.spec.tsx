import { render, screen } from '@testing-library/react';
import Home from "@/app/page";

it('should have correct test', () => {
    render(
        <Home />
    );

    const myElem = screen.queryByText('Hello world')
    expect(myElem).toBeInTheDocument();
});