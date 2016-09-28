import {Injectable} from 'angular2/core'
import{IProduct} from './product'
import{Http,Response} from 'angular2/http'
import{Observable} from 'rxjs/Observable'
@Injectable()
export class ProductService{
    private productURL:string='api/products/products.json'
    constructor(private _http: Http)
    {}
    
    getProduct():Observable<IProduct[]>{
        return this._http.get(this.productURL)
        .map((response:Response)=><IProduct[]>response.json())
    }
}