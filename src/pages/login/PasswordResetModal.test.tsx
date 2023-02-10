import { render, screen } from "@testing-library/react";
import PasswordResetModal from "./PasswordResetModal";

jest.mock('../../contexts/AuthProvider', () => ({
    AuthContext:  () => 'mocked message',
    useAuth: () => 'mocked message'
}));
describe("PasswordResetModal", () => {
    test.skip("Render Currently", () => {
        render(<PasswordResetModal />);
        const resetPasswordTerms = screen.getByRole("checkbox");
        expect(resetPasswordTerms).toBeInTheDocument();
    });
});
