import axios from "axios";
import bodyParser from "body-parser";

const handler = async (req, res) => {  
    const { value } = req.body;
    // console.log(req.body);
    console.log( "hello" + process.env.API_KEYS);
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${value}&pageSize=20`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEYS}`,
      },
    }
  );
    const data = await response.data;
    res.status(200).json(data);
};


  export default handler;
