export class Ipo
{

    constructor(
        public name:string,
        public sector:string,
        public stockExchange:string,
        public remarks:string,
        public date: string,
        public sharePrice: number,
        public totalShares: number,
        public id?:number
        
    ){}
}