const ApiData = async () => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get`, {
      method: "GET",
    });
    const result = await data.json();
    return result.data;
  } catch (error: any) {
    console.log(error.message);
  }
};
const GetData = async () => {
  const d: any = await ApiData();
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
          {d && d.map(
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
