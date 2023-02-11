import { rest } from 'msw'
import { renderHook, waitFor } from '@testing-library/react'
import { server } from '../../setupTests'
import { createWrapper } from '../../tests/utils';
import useFetchQuestionData from '../useFetchQuestionData';

describe('query hook', () => {
    test('successful query hook', async () => {
        const { result } = renderHook(() => useFetchQuestionData("136666"), {
            wrapper: createWrapper()
        })

        await waitFor(() => expect(result.current.isSuccess).toBe(true))

        expect(result.current.data[0]?.name).toBe('Valid Palindrome')
    })

    test('failure query hook', async () => {
        server.use(
            rest.get('*', (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )

        const { result } = renderHook(() => useFetchQuestionData("1111"), {
            wrapper: createWrapper()
        })

        await waitFor(() => expect(result.current.isError).toBe(true))

        expect(result.current.error).toBeDefined()
    })
})