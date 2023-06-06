export interface ICategoryGetCategoriesByResturantID {

    "id":number,
    "resturantName":string,
    "applicationUser":string
    "categoryList": [
      {
        "id":number,
        "catergoryName":string,
        "productlist": [
          {
            "id":number,
            "name":string,
            "description":string,
            "image":string,
            "price":number,
            "isDeleted": boolean,
            "categoryID": number,
            "category": null,
            "resturantID":number
          },
        ]
      }
    ]


}

  // "id":number,
    // "categoryID":number,
    // "category":
    //   {
    //     "id":number;
    //     "name":string;
    //     "isDeleted":boolean,
    //   }
    //   "products":[]






