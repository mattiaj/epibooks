import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeContextProvider from '../../context/ThemeContextProvider';
import SelectContextProvider from '../../context/SelectContextProvider';
import CommentArea from './CommentArea';

test("Controllo se il componente commentArea viene reindirizzato correttamente", () => {
    
    render(
        <ThemeContextProvider>
            <SelectContextProvider>
                <BrowserRouter>
                    <CommentArea />
                </BrowserRouter>
            </SelectContextProvider>
        </ThemeContextProvider>
    )

    const commentElement = screen.getByTestId("comment");

    expect(commentElement).toBeInTheDocument()
}
)