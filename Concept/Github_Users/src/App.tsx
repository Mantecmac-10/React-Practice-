import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    }
    fetchUser();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h1>Github Users</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} width="100px" height="100px" />
            <br></br>
            <span> {user.login}</span>
          </li>
        ))}
      </div>
    </>
  );
}
