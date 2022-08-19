import {collection, getDocs} from "firebase/firestore";
import { Banner } from "../interfaces/banner.interface";
import { Category } from "../interfaces/category.interface";
import { Product } from "../interfaces/product.interface";
import { db } from "./Fb";

export class GetData{

  getData = async (collectionName: string) => {
    const response = await getDocs(collection(db, collectionName));
    return response;
  }

  async getBanners(collectionName: string) {
    const response = await this.getData(collectionName);
      const array:Array<Banner> = response.docs.map((doc) => (
        {
          id: doc.id,
          name: doc.data().name,
          banner: doc.data().banner
        }
      ));
      return(array);
  }

  async getProducts(collectionName: string){
    const response = await this.getData(collectionName);
      const array:Array<Product> = response.docs.map((doc) => (
        {
          id: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          images: doc.data().images,
          price: doc.data().price,
          stock: doc.data().stock,
          discount: doc.data().discount,
          featured: doc.data().featured,
          category: doc.data().category,
          created: doc.data().created
        }
      ));
      return(array);
  }

  async getCategories(collectionName: string){
    const response = await this.getData(collectionName);
    const array: Array<Category> = response.docs.map((doc) => (
      {
        id: doc.id,
        name: doc.data().name,
        image: doc.data().image,
      }
    ));
    return(array);
  }
}
