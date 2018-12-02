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
    this.temperature.set(temperature)
    let result = "";
    if (rainfall > 50 || humidity > 80) {
      result += "rain is ‘likely’";
    }
    if (temperature < 15) {
      result += "weather is ‘cold’";
    }
    if (wind_velocity > 50) {
      result += "wind is ‘strong’";
    }
    if (temperature > 30) {
      result += "weather is ‘hot’";
    }
    if (result === "") {
      result += "weather is good";
    }
    return result;
  });

  suggest = computed(() => {
    const status = this.status.get();
    let result = "";
    if (status.includes("rain is ‘likely’")) {
      result += "equiment recommendation is ‘umbrella or raincoat’.";
    }
    if (
      status.includes("weather is ‘cold’") &&
      status.includes("wind is ‘moderate’")
    ) {
      result += "equiment recommendation is ‘jacket’.";
    }
    if (status.includes("weather is ‘hot’")) {
      result += "equiment recommendation is ‘sun cream’. ";
    }
    if (
      status.includes("rain is ‘likely’") &&
      moment.diff(moment(this.departing.get()), "days") !== 0
    ) {
    }
    if (
      status.includes("rain is ‘likely’") &&
      status.includes("wind is ‘moderate’")
    ) {
      result += "not recommended transportation is ‘metro’";
    }
    if (
      status.includes("rain is ‘likely’") &&
      status.includes("wind is ‘strong’")
    ) {
      result += "not recommended transportation is ‘metro and boat’.";
    }
    return result;
  });
}
