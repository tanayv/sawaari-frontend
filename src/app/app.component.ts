import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /** @todo: Fire the function rickshawWalaFound() when you want to display final screen 
   * 
   * - This will set the 'stage' to 3, which triggers the display of the final screen
   * - As backup, I have also put a secret entry to that screen by clicking the user icon on the loading screen
  */

  stage: Number = 0;
  setStage = (newStage: Number) => {
    this.stage = newStage;
  }

  origin: String = "IIT Metro Station";
  originEta: Number = 8;

  listOfStations: Array<{
    name: String,
    color: String,
    distance: Number
  }> = [
    {
      name: "Hauz Khas",
      color: "yellow",
      distance: 1.3
    },{
      name: "IIT Metro Station",
      color: "yellow",
      distance: 1.9
    },
    {
      name: "R K Puram",
      color: "magenta",
      distance: 2.1
    },
    {
      name: "South Ex",
      color: "pink",
      distance: 2.4
    },
    {
      name: "Bhikaji Cama Place",
      color: "pink",
      distance: 3.2
    },
    {
      name: "Munirka",
      color: "magenta",
      distance: 3.6
    },
    {
      name: "Sarojini Nagar",
      color: "pink",
      distance: 4.2
    },
    {
      name: "INA",
      color: "yellow",
      distance: 5.2
    },
    {
      name: "Ashram",
      color: "magenta",
      distance: 5.4
    },
  ]

  selectOriginStation = (station: {
    name: String,
    color: String,
    distance: number
  }) => {
    this.origin = station.name;
    this.originEta = Math.ceil(8 / 1.9 * station.distance);
    this.setStage(0);
  }


  destination: {
    addressLine1: String,
    addressLine2: String,
    distance: number
  } = {
    addressLine1: "D1/141",
    addressLine2: "Block D, Safdarjung Enclave",
    distance: 1.3
  }

  tripLength: Number = 1.3;
  estimatedFare: String = "14-22";
  tripDuration: Number = 9;

  listOfDestinations: Array<{
    addressLine1: String,
    addressLine2: String,
    distance: number
  }> = [
    {
      addressLine1: "D1/141",
      addressLine2: "Block D, Safdarjung Enclave",
      distance: 1
    },
    {
      addressLine1: "A1/121",
      addressLine2: "Block A, Safdarjung Enclave",
      distance: 2.1
    },
    {
      addressLine1: "SBI ATM",
      addressLine2: "Green Park Market",
      distance: 1
    },
    {
      addressLine1: "Gogia Finance",
      addressLine2: "Block A, Green Park Extension",
      distance: 3.2
    },
    {
      addressLine1: "HKV Entry",
      addressLine2: "Hauz Khas Village",
      distance: 3
    },
    {
      addressLine1: "Sudarshan Momo Shop",
      addressLine2: "SDA Market",
      distance: 0.7
    }
  ]

  selectDestination = (address: {
    addressLine1: String,
    addressLine2: String,
    distance: number
  }) => {
    this.destination = address;
    this.tripLength = parseFloat((1/1.3 * address.distance).toPrecision(2));
    this.tripDuration = Math.round(9/1.3 * address.distance);
    let lowerFarePoint = Math.round(14/1.3 * address.distance + Math.random()*2);
    let higherFarePoint = Math.round(22/1.3 * address.distance + Math.random()*2);
    this.estimatedFare = "" + lowerFarePoint + "-" + higherFarePoint;
    this.setStage(1);
  }

  randomizeDestinationSearch = () => {
    this.listOfDestinations.sort((data, data1) => {
      if (Math.random() > 0.5)
        return -1
      else
        return 0
    })
  }

  rickshawWalaFound = () => {
    this.setStage(3);
  }



}
