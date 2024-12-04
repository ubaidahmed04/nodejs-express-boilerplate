import "dotenv/config";

const ENV = (process?.env || {});

const DELETE_DATA_MESSAGE = 'Data deleted successfully';
const UPDATE_DATA_MESSAGE = 'Data updated successfully';
const INTERNAL_SERVER_ERROR_MESSAGE = 'Internal server error';
const POST_DATA_MESSAGE = 'Data added successfully';

export {
    ENV,
    DELETE_DATA_MESSAGE,
    UPDATE_DATA_MESSAGE,
    INTERNAL_SERVER_ERROR_MESSAGE,
    POST_DATA_MESSAGE
};