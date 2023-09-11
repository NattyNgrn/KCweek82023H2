import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Item from "./components/item.jsx"

test("testing item component defined text", ()=>{

    const item = {text: "hello"};

    const renderReturn = render(<Item item={item}/>);

    const expectReturn = expect(renderReturn.getByText("hello"));

    expectReturn.toBeDefined();

});

test("testing item component to be undefined text", ()=>{
    const item = {};
    const renderReturn = render(<Item item={item}/>);
    const expectReturn = expect(renderReturn.container.firstChild);
    expectReturn.toBeNull();
})