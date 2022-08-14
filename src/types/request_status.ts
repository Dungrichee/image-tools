import { IErrors } from './errors';

export type TRequestStatusOption =
    | 'not_started'
    | 'pending'
    | 'fulfilled'
    | 'rejected'
    | 'cancelled';

export type TRequestState = {
    status: TRequestStatusOption;
    error?: IErrors | null;
};
