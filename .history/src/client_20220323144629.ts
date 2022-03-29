import {
	createClient,
	setClient,
} from '@urql/svelte';

const client = createClient({
    url: 'http://localhost:3000/graphql',
});

setClient(client);
