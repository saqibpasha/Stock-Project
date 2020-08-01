export class User
{

    constructor(
        public username:string,
        public password:string,
        public email?:string,
        public mobile?: string,
        public id?:number,
        public confirmed?: string
       
        
    ){}
}