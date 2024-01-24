const ApiData = async () => {
  try {
    const data = await fetch("http://localhost:3000/api/get", {
      method: "GET",
    });
    const result = await data.json();
    return result.data;
  } catch (error: any) {
    console.log(error.message);
  }
};
const GetData = async () => {
  const d = await ApiData();
  console.log(d);

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {d.map(
            (item: {
              id: string;
              name: string;
              email: string;
              password: string;
              gender: string;
            }) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.gender}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GetData;
