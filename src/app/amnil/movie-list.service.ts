import { Injectable ,enableProdMode} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
enableProdMode();
@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  baseUrl="http://localhost:3003/api/"

  constructor(private httpclient: HttpClient) { }

  movieList()
  {
    return this.httpclient.get(this.baseUrl);
  }
  allFileList(path)
  {
    const obj={
      xpath:path
    }
    console.log(path,"xpath")
    return this.httpclient.put(this.baseUrl+"Files/",obj)
  }
}

