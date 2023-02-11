import { render, screen } from "@testing-library/react";
import PopularCourses from "./EasyToStart";

describe("EasyToStart Component", () => {
    test("Render Currently EasyToTest Component", ()=>{
        render(<PopularCourses/>);
        const textElement = screen.getAllByText(/Learning/i);
        expect(textElement).toHaveLength(3);
    })
})