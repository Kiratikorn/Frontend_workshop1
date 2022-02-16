import React from 'react';

const Box = ({title,complete}) => {
    return (
        <div className= {`w-60 h-20 flex justify-center items-center rounded-md shadow-xl mb-10 mx-2 text-center transform hover:scale-x-110 hover:scale-y-110 transition duration 300 ${complete ? 'bg-green-300' : 'bg-red-300'}`}>
            {title}
        </div>
    );
};

export default Box;