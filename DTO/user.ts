import {Expose, Type, Transform} from 'class-transformer';

export class user{//?los transformadores siempre van encima de los atributos
    @Expose({name: "id"})
    @Transform(({value})=>parseInt(value),{ toClassOnly: true})//?solo se aplica para numeros en objetos y clases
    ID:number;
    @Expose({name: "nombre"})
    @Type(()=> String)
    nom_com:string;
    @Expose({name: "edad"})
    @Transform(({value})=>parseInt(value),{toClassOnly: true})//!toClassOnly no deja cambiar el tipo de dato en la clase
    eda: number;
    constructor(ID: number, nom_com: string, eda: number){//?como yo lso quiero manejar en el backend
        this.ID = ID;
        this.nom_com = nom_com;
        this.eda = eda;
    }
    get nombreId(): string{
        return `${this.ID} - ${this.nom_com}`
    }
}