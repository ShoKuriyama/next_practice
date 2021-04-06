import apiData from "../../../components/data";

export default function handler(req, res) {
  const {
    query: {
      params: [id, item],
    },
  } = req;
  const result = { id: id, item: apiData[id][item] };
  res.json(result);
}
