import { Button } from 'antd'
import { Variants } from 'antd/es/config-provider';
import {  useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
  return (
     <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
    <h1 className="text-6xl font-bold text-gray-800">404</h1>
    <p className="text-lg text-gray-600 mt-4">Oops! The page you're looking for doesn't exist</p>
    <Button onClick={() => navigate(-1)} type="primary">
    Go Back
  </Button>
  </div>
  )
}

export default NotFound