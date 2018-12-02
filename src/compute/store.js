import { observable, computed } from "mobx";
import moment from "moment";
import { getWeather } from "./api";

export default class Store {
  origincountry = observable.box("");
  originregion = observable.box("");
  destinationcountry = observable.box("");
  destinationregion = observable.box("");
  departing = observable.box("");
  returning = observable.box("");
  temperature = observable.box("23");

  status = computed(() => {
    const { rainfall, humidity, temperature, wind_velocity } = getWeather({
      origincountry: this.origincountry.get(),
      originregion: this.originregion.get(),
      destinationcountry: this.destinationcountry.get(),
      destinationregion: this.destinationregion.get(),
      departing: this.departing.get()
    });
    this.temperature.set(temperature);
    let result = [];
    if (rainfall > 50 || humidity > 80) {
      result.push("Rainy");
    }
    if (temperature < 15) {
      result.push("Cold Weather");
    }
    if (wind_velocity > 50) {
      result.push("Windy");
    }
    if (temperature > 30) {
      result.push("Hot Weather");
    }
    if (result.length === 0) {
      result.push("Perfect Timing !");
    }
    return result;
  });

  suggest = computed(() => {
    const status = this.status.get();
    let result = [];
    if (status.includes("Rainy")) {
      result.push("Equipment recommendation is umbrella or raincoat.\n");
    }
    if (status.includes("Cold Weather") && status.includes("Windy")) {
      result.push("Equipment recommendation is jacket.\n");
    }
    if (status.includes("Hot Weather")) {
      result.push("Equipment recommendation is sun cream. \n");
    }
    if (
      status.includes("Rainy") &&
      moment().diff(moment(this.departing.get()), "days") !== 0
    ) {
    }
    if (status.includes("Rain y") && status.includes("Windy")) {
      result.push("Not recommended transportation is metro\n");
    }
    if (status.includes("Rainy") && status.includes("Windy")) {
      result.push("Not recommended transportation is metro and boat.\n");
    }
    return result;
  });
}
