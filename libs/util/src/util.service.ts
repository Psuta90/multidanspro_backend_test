import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { Response } from './classes/response';

@Injectable()
export class UtilService {
    constructor (
        private _db : PrismaService,
        private res : Response
    ) {}

    get db() {
        return this._db;
    }

    get response () {
        return this.res;
    }
}
