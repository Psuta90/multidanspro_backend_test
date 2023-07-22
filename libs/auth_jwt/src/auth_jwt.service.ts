import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

export interface userRequest {
    user_id?: never;
    email?: string;
}

@Injectable()
export class AuthJwtService {
    constructor(@Inject(REQUEST) private readonly req: any) { }

    /**
     * Get user information
     */
    get user(): userRequest {
        return this.req.user ?? {};
    }
}
