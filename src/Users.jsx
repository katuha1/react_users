import { useState, useEffect } from "react";
import axios from "axios"
export default function Users() {
  const [ users, setUsers ] = useState([]);
  //   const users = [
  //     {
  //       name: "Имя1",
  //       surname: "Фамиля1",
  //       thirname: "Отчество1",
  //       age: 17,
  //       phone: 89005055555,
  //     },
  //     {
  //       name: "Имя2",
  //       surname: "Фамиля2",
  //       thirname: "Отчество2",
  //       age: 17,
  //       phone: 89005055555,
  //     },
  //     {
  //         name: "Имя3",
  //         surname: "Фамиля3",
  //         thirname: "Отчество3",
  //         age: 17,
  //         phone: 89005055555,
  //       },
  //   ];

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setUsers(data.data)
        console.log(data.data);
      })
      .catch((e) => {
        console.log("Ошибка", e.message);
      });
  }, []);

  return (
    <div>
      {users?.length > 0 ? (
        <>
          <div className="card">
            {users.map((el, id) => (
              <div className="user">
                <p>{el.name}</p>
                <p>{el.surname}</p>
                <p>{el.thirname}</p>
                <p>{el.age}</p>
                <p>{el.phone}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        "Пусто"
      )}
      {/* <Outlet></Outlet> */}
    </div>
  );
}
