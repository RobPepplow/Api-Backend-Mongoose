import './App.css'
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import {ClienteCreate, ClienteEdit, ClienteList} from './clientes/index'
const dataProvider = jsonServerProvider("http://localhost:3030/api");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="statusContatos" list={ListGuesser} />
    <Resource name="clientes" list={ClienteList} create={ClienteCreate} edit={ClienteEdit}/>
    <Resource name="imoveis" list={ListGuesser} />
    <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default App;
