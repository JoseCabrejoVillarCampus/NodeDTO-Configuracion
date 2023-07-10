import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { user } from './controller/user.js';

let json ={ 
    id:  123,
    nombre: "miguel",
    edad: 23
}
let data= plainToClass(user, json, {excludeExtraneousValues:true})
console.log(data);
console.log(data.nombreId);
console.log(JSON.stringify(data));