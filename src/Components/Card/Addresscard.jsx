import React from 'react';
import { Link } from 'react-router-dom';

const Addresscard = ({ address, handleDefault, handleRemove }) => {
  return (
    <div className={`p-3  border-2 ${address.default ? "border-green-500 rounded-lg" : ""}`}>
      <h1 className="font-bold">{address.fullName}</h1>
      <p>{address.flatHouse}</p>
      <p>{address.areaStreet}</p>
      <p>{address.City}, {address.state.toUpperCase()}, {address.pincode}</p>
      <p>{address.country}</p>
      <p>Phone number: {address.mobileNumber}</p>

      <div>
        <Link to={`/edit/${address.id}`} className="text-blue-500">edit</Link> {" | "}
        {!address.default && (
          <Link onClick={() => handleRemove(address.id)} className="text-blue-500">
            remove {" | "}
          </Link>
        )}

        {!address.default && (
          <Link onClick={() => handleDefault(address.id)} className="text-blue-500">
            set as default
          </Link>
        )}
      </div>
    </div>
  );
};

export default Addresscard;
