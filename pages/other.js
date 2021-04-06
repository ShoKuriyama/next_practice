import Link from "next/link";
import Layout from "../components/layout";
import { useState } from "react";
import useSWR from "swr";

export default function Other() {
  const title = "Other";
  const [pref, setPref] = useState({ id: 0, item: "name" });
  const [address, setAddress] = useState(
    "/api/hello/" + pref.id + "/" + pref.item
  );
  const { data, err } = useSWR(address);
  const onChange = (e) => {
    pref.id = e.target.value;
    setPref(pref);
    setAddress("/api/hello/" + pref.id + "/" + pref.item);
  };
  const onSelect = (e) => {
    pref.item = e.target.value;
    setPref(pref);
    setAddress("/api/hello/" + pref.id + "/" + pref.item);
  };
  return (
    <div>
      <Layout header="Next.js" title="Other page">
        <div className="card p-4 text-center">
          <h5 className="mb-4 ">{JSON.stringify(data)}</h5>
          <input type="number" className="form-control" onChange={onChange} />
          <select onChange={onSelect}>
            <option value="name">Name</option>
            <option value="mail">Mail</option>
            <option value="age">Age</option>
          </select>
          <Link href="./">
            <button className="btn btn-primary">Back to top</button>
          </Link>
        </div>
      </Layout>
    </div>
  );
}
