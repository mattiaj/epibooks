import {render, screen} from '@testing-library/react';
import AllTheBooks from './AllTheBooks';
import { BrowserRouter } from 'react-router-dom';
import ThemeContextProvider from '../../context/ThemeContextProvider';
import SelectContextProvider from '../../context/SelectContextProvider';
import fantasy from '../../data/fantasy.json';

test("Controllo se le il numero di card è uguale a i file json", async () => {
    render(
        <BrowserRouter>
            <ThemeContextProvider>
                <SelectContextProvider>
                    <AllTheBooks />
                </SelectContextProvider>
            </ThemeContextProvider>
        </BrowserRouter>
    );

    const cardBook = await screen.findAllByTestId("card");
    const fileBook = fantasy.length;


    expect(cardBook.lenght).toBeGreaterThanOrEqual(fileBook);
})