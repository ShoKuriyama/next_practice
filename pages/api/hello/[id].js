import apiData from "../../../components/data";

export default function Handler(req, res) {
  const {
    query: { id },
  } = req;

  res.json(apiData[id]);
}
