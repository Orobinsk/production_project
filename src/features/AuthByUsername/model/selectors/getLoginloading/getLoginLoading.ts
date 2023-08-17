import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginloading = (state:StateSchema) => state?.loginForm?.isLoading || false;
