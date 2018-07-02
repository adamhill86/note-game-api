import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { USER } from './models/users.constants';
import { User } from './models/users.interface';

@Injectable()
export class UsersService {
    // private db: firebase.firestore.Firestore;

    // constructor(private dbService: DatabaseService) {
    //     this.db = dbService.database;
    // }

    // public async logIn(user: User): Promise<any> {
    //     return await firebase.auth()
    //         .signInWithEmailAndPassword(user.username, user.password)
    //         .catch(error => {
    //             console.log(error.message);
    //         });
    // }

    // public async findAllUsers(): Promise<any> {
    //     console.log('in find');
    //     const snapshot = await this.db.collection('users').get();
    //     snapshot.forEach(doc => {
    //         console.log(`id: ${doc.id}`, doc.data());
    //     });
    // }
    constructor(@InjectModel(USER) private readonly userModel: Model<User>) {}

    public async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    public async findAll(): Promise<User[]> {
        console.log('In find all');
        return await this.userModel.find().exec();
    }

    public async findById(id: string): Promise<User> {
        return await this.userModel.findById(id).exec();
    }
}
