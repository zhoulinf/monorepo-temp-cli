import logger from "./logger.js";


function catchError(fn) {
    return (...args) => {
        try {
            return fn(...args);
        } catch (error) {
            logger.error(error.message);
        }
    };
}

function asyncCatchError(fn) {
    return async (...args) => {
        try {
            return await fn(...args);
        } catch (error) {
            logger.error(error.message);
        }
    };
}


export{
    catchError,
    asyncCatchError
}