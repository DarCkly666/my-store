import {collection, getDocs} from "firebase/firestore";
import { db } from "./Fb";

export class GetData{
  private collectionName: string;

  constructor(collectionName: string){
    this.collectionName = collectionName;
  }

  getData = async () => {
    const response = await getDocs(collection(db, this.collectionName));
    console.log(response);
    return response;
  }
}
