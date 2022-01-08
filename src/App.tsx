import { MyComponent } from "./MyComponent";
import MyComponent2 from "./MyComponent2";

function App() {
  return (
    <div className="App">
      <div style={{ float: 'left' }}>
        <MyComponent />
      </div>
      <div style={{ paddingLeft: 20, float: 'left' }}>
        <MyComponent2 />
      </div>
    </div>
  );
}

export default App;

export interface GeoLocation {
  lat: string;
  lng: string;
}

export interface Company {
  "name": string;
  "catchPhrase": string;
  "bs": string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
