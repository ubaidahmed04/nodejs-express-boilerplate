import { getSingle } from "../db/index.js";

const getSingleData = (id) => {
    return getSingle(id);
}

export default getSingleData;