import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend } from "recharts";
import axios from "axios";

export default function Chart() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("https://covidtracking.com/api/v1/us/daily.json")
      .then((res) => {
        let x = res.data
        setData(x.reverse());
      });
  }, [])

  return (
    <>
      <LineChart width={700} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="date"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Tooltip/>
        <Legend verticalAlign="top" height={36}/>
        <Line type="monotone" dataKey="positive" stroke="#8884d8" dot={false} />
        <Line type="monotone" dataKey="negative" stroke="#82ca9d" dot={false} />
        <Line type="monotone" dataKey="death" stroke="#ff0000" dot={false} />
      </LineChart>
    </>
  )
}

