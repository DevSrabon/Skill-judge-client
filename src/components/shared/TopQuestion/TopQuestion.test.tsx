import { rest } from 'msw'
import { renderWithClient } from '../../../tests/utils';
import { server } from '../../../setupTests';
import TopQuestion from './TopQuestion';

describe('query component', () => {
    test('successful query component', async () => {
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const result = renderWithClient(<TopQuestion />)
        expect(await result!.findByText(/Valid Palindrome/i)).toBeInTheDocument()
    })

    test('failure query component', async () => {
        server.use(
            rest.get('*', (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const result = renderWithClient(<TopQuestion />)

        expect(await result!.findByText(/Something Went Wrong!!!/i)).toBeInTheDocument()
    })
})