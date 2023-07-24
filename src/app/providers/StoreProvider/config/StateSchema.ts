import { CounterSchema } from 'entities/Counters';
import { UserSchema } from 'entities/User';

export interface StateSchema {
    counter:CounterSchema;
    user: UserSchema
}
