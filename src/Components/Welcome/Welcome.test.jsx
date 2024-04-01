import { render, screen} from "@testing-library/react";
import Welcome from "./Welcome";
import ThemeContextProvider from "../../context/ThemeContextProvider";

test("Controllo se l'elemento sia montato correttamente", () => {
    render(<ThemeContextProvider>
        <Welcome />
    </ThemeContextProvider>)

    const welcomeComponent = screen.getByRole("heading");

    expect(welcomeComponent).toBeInTheDocument()

})