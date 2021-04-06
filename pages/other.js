import Link from "next/link";
import Layout from "../components/layout";

export default function Other() {
  const title = "Other";
  return (
    <div>
      <Layout header="Next.js" title="Other page">
        <div className="card p-4 text-center">
          <h5 className="mb-4 ">This is Other Page</h5>
          <Link href="./">
            <button className="btn btn-primary">Back to top</button>
          </Link>
        </div>
      </Layout>
    </div>
  );
}
