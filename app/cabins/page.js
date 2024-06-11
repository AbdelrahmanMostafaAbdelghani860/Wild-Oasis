export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();
  // console.log(data);
  return (
    <div>
      <h3>Welocome to Cabins Page !</h3>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name}
            The street name is {user.address.street}
          </li>
        ))}
      </ul>
      <p>There are {data.length} users</p>
    </div>
  );
}
