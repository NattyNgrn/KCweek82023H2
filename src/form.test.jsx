import { describe, expect, test, vi, vitest } from 'vitest';
import { render, fireEvent, getByLabelText } from '@testing-library/react';
import Form from "./components/form.jsx";


test("testing form functionality", ()=>{
    const addItemMock = vitest.fn();
    const renderReturn = render(<Form addItem={addItemMock}/>);
    const input = renderReturn.container.querySelector(".input");
    const submit = renderReturn.getByText('Submit');
    fireEvent.change(input, {target: {value: "cats"}});
    fireEvent.click(submit);
    expect(addItemMock).toHaveBeenCalledWith("cats");
})
