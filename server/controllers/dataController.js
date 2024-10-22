import Data from "../model/Data.js";

export const getData = async (req, res) => {
  try {
    const filters = req.query;
    const data = await Data.find(filters);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
