import { initClient } from '@urql/svelte'

export const client = initClient({
  url: import.meta.env.VITE_GRAPHQL_URL as string,
  fetchOptions: () => {
    const token = import.meta.env.VITE_PUBLIC_FAUNA_KEY
    return {
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  },
})
