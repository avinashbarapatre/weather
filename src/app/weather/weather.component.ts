import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { WeatherAPIService } from "../weatherapi.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private weatherAPIService: WeatherAPIService
  ) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ["Pune"]
    });
    this.getWeatherDetails();
  }

  getWeatherDetails(formValues = {location : 'Pune'}) {    
    this.weatherAPIService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }
}
