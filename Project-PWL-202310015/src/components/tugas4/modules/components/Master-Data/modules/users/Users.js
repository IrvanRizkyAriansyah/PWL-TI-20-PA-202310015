import React from "react";
import TableUsers from "./TableUsers";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpin from "../../../../../layouts/components/loadings/LoadingSpin";
import AlertInfo from "../../../../../layouts/components/alerts/AlertInfo";
import { FormUsers } from "./FormUsers";

export default function Users() {
  const [user, setUser] = useState({
    loading: false,
    data: [],
    message: "",
  });
  
  const getUser = async () => {
    setUser({ ...user, loading: true });
    try {
      await axios.get('http://localhost:8080/api/students', {
    }).then((res) => {
      setUser({
          ...user,
          loading: false,
          data: res.data.data,
          message: "",
        });
    })
    } catch (error) {
      setUser({ ...user, loading: false, message: error, data: [] });
    }
  }

  useEffect(() => {
    getUser()
  }, [])
  
  return (
    <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-8">
          <div className="card">
            <h5 className="card-header">User</h5>
            <div className="card-body">
              {user.loading ? <LoadingSpin /> : ""}
              {user.message ? (
                <AlertInfo
                  message={user.message.name + ". " + user.message.message}
                  variant="danger"
                />
              ) : (
                <div>
                <TableUsers data={user.data}/>
                <p>{Object.values(user.data).length} data of user</p>
                </div>
              )}      
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
              <h5 className="card-header">Input New User</h5>
              <div className="card-body">
                <FormUsers getUser={getUser} />
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
