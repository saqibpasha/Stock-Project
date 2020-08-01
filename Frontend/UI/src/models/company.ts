export class Company
{

    constructor(
        public companyName:string,
        public sector:string,
        public stockExchange:string,
        public briefWriteup:string,
        public companyCode: string,
        public turnover: string,
        public ceo: string,
        public boardOfDirector: string,
        public id?:number
        
    ){}
}