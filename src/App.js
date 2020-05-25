import React from 'react';
import './App.css';
import UsersList from "./Components/UsersList"
import CustomSegment from "./Components/CustomSegment"
import UserDetails from "./Components/UserDetails"
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <img class="ui centered medium image" alt="header" src="/images/header.png" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <CustomSegment>
            <UsersList />
          </CustomSegment>
        </div>
        <div className="col-md-9">
          <CustomSegment>
            <UserDetails />
          </CustomSegment>
        </div>
      </div >
    </div >
  );
}

export default App;
