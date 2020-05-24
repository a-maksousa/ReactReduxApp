import React from 'react';
import './App.css';
import UsersList from "./Components/UsersList"
import CustomSegment from "./Components/CustomSegment"
function App() {
  return (
    <div className="container fluid">
      <div className="row">
        <div className="col-md-3">
          <CustomSegment>
            <UsersList />
          </CustomSegment>
        </div>
        <div className="col-md-9">
          <CustomSegment>
            <p>User Details</p>
          </CustomSegment>
        </div>
      </div >
    </div >
  );
}

export default App;
