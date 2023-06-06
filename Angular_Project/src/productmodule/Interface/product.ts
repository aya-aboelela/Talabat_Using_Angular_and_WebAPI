export interface IProduct {
    
    id:number,
    name:string,
    description:string,
    image:string,
    price:number,
    isDeleted:boolean,
    categoryID:number,
    resturantID:number,
    category: {
        id:number,
        name:string,
        isDeleted:boolean
       
      }
}
