import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from 'database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './schemas/users.schema';
import { USER } from './models/users.constants';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: USER,
                schema: UsersSchema,
            },
        ]),
    ],
    controllers: [
        UsersController,
    ],
    providers: [
        UsersService,
    ],
})
export class UsersModule {}
