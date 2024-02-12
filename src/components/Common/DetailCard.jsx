import React from 'react';
import { Card, Avatar, Image } from 'antd';

const { Meta } = Card;

const DetailCard = ({ data }) => {
  const { name, picture, cell, dob, email, gender, id, location, nat, phone } = data[0];
  const gradientStyles = {
    backgroundImage: 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
};
  return (
    <Card className="w-full max-w-lg mx-auto mt-4 border-2 border-gray-300 rounded-lg shadow-lg text-green" style={gradientStyles}>
      <div className="flex items-center">
      <div className='mr-6'><Image className="border-2 border-green-500" src={picture.large} width={100} height={90} /></div>
        <div>
          <div className='text-black flex text-lg' > {`${name.title} ${name.first} ${name.last}`}</div>
          <div className="flex flex-wrap">
          <div className="w-full"><p className='flex'><span className="font-semibold pr-1">Gender:</span> {gender}</p></div>
            <div className="w-full sm:w-1/2">
              <p className='flex'><span className="font-semibold pr-1">Cell:</span> {cell}</p>
              <p className='flex'><span className="font-semibold pr-1">Date of Birth:</span> {new Date(dob.date).toLocaleDateString()}</p>
              <p className='flex'><span className="font-semibold pr-1">ID:</span> {id.value}</p>
            </div>
            <div className="w-full sm:w-1/2">
              <p className='flex'><span className="font-semibold pr-1">Nationality:</span> {nat}</p>
              <p className='flex'><span className="font-semibold pr-1">Phone:</span> {phone}</p>
            </div>
          </div>
          <div className='w-full'><p className='flex'><span className="font-semibold pr-1">Location:</span> {location.city}, {location.state}, {location.country}</p></div>
        </div>
      </div>
    </Card>
  );
};

export default DetailCard;
