import Link from "next/link";
import Layout from "../components/layout";
import MyImage from "../components/image";

export default function Home() {
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
      </Layout>
    </div>
  );
}
