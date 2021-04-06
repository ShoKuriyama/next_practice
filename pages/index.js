import Link from "next/link";
import Layout from "../components/layout";
import MyImage from "../components/image";
import useSWR from "swr";

export default function Home() {
  const { data } = useSWR("/data.json");
  return (
    <div>
      <Layout header="Next.js" title="Top page">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4 ">This is Index Page</h5>
          <Link href="./other">
            <button className="btn btn-primary">Go to Other</button>
          </Link>
        </div>
        <MyImage fname="office.jpg" size="300px" />
        <div className="alert alert-primary text-center">
          <h5>{data != undefined ? data.message : "error..."}</h5>
          <table className="table bg-white">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Mail</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {data != undefined ? (
                data.data.map((value, key) => (
                  <tr key={key}>
                    <th>{value.name}</th>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th></th>
                  <td>no data.</td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
}
