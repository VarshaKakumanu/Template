
import { Card} from 'antd'
import { Input } from 'antd';
import { Button } from "antd";
import Title from 'antd/es/skeleton/Title';
import React from 'react'

const ToDoList = () => {
  return (
<div>
<Card title="TO-DO List" headStyle={{ textAlign: "center" }}>
  <div className= "flex gap-1">
<Input placeholder="Basic usage" /> <Button> ADD </Button></div>
<div> list here </div>
</Card>
</div>
  )
}

export default ToDoList