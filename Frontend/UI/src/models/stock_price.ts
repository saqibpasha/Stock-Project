export class StockPrice
{

    constructor(
        public companyCode:string,
        public stockExchange:string,
        public price:string,
        public date:string,
        public time:string,
        public id?:number
    ){}
}