export interface IResturant {
    id:number,
    image:string,
    minOrderAmmount:number,
    workingHours:string,
    delivaryFee: number,
    delivaryTime: string,
    isDeleted: Boolean,
    resturantCategories:[],
    applicationUserId: string
}

