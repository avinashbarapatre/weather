import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WeatherAPIService {
  constructor(private http: HttpClient) {}

  getWeather(location: string) {
    return this.http.get(
      "http://api.openweathermap.org/data/2.5/forecast?q="+location+"&appid=10a448645979b10b769992cbf52a6176"      
    );
  }
}
