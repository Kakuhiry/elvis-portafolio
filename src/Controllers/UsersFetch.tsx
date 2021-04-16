import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import ListComponent from "../Pages/List/FirstSection";
import {Purchase, User} from '../Utils/Interfaces'

export default function UsersFetch() {


  const defaultType: User[] = [];
  const [data, setData] = useState<User[]>(defaultType);

  const getUsers = async () => {
    try {
      axios
        .get<User[]>("https://jsonplaceholder.typicode.com/todos")
        .then((response: AxiosResponse) => {
          setData(response?.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  
  const receip: Purchase = {
    price: 9,
    customer: data[0],
  };

  return (
    <div>
      <ListComponent {...receip} />
    </div>
  );
}
