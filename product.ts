import { Byte } from "@angular/compiler/src/util";
import { SafeResourceUrl } from "@angular/platform-browser";

export class Product {
  [x: string]: any;
  id: number;
  name: string;
  type: string;
  price: string;
  gender: string;
  image: SafeResourceUrl;

}
