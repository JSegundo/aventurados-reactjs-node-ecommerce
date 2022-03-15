import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext.js";

const AdminAllUsers = () => {
  const { currentUser } = useAuth();

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const users = await axios.get(
          `http://localhost:3001/api/user/admin/users/${currentUser.uid}`
        );
        console.log("users", users);
        setAllUsers(users.data);
        console.log("allUsers state: ", allUsers);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h2>todos los usuarios</h2>
        <ul>
          {allUsers.map((userObj, i) => (
            <li key={i}>
              <p>
                Nombre: {userObj.name} {userObj.lastName}
              </p>
              <p>Email: {userObj.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdminAllUsers;
