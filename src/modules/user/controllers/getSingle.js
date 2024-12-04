import { INTERNAL_SERVER_ERROR_MESSAGE } from "../../../constants/index.js";
import getSingleData from "../services/getSingle.js";

const getSingleController = async (req, res) => {
    try {
        const {id } = req.params.id
        const data = await getSingleData(id)
        res.status(200).send({ status: 200, message: "get single data successfully" , data  });


    } catch (error) {
        res.status(500).send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE });
        
    }
}
export default getSingleController