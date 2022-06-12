import React from "react";

function SingleUser({ data }) {
  return (
    <div className="main">
      <h2 className="nav-header ml-2">User Detail</h2>
      <div>
        <div>
          <img src={data.avatar} alt="Profile Pic for User" />
          <div className="">
            <h1>
              Name: {data.first_name} {data.last_name}
            </h1>
            <hr />
            <h2 className="textSize">Email Id: {data.email}</h2>
            <hr />
            <h2 className="textSize">User Id: {data.id}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleUser;

