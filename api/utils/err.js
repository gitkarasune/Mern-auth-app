export const handleError = ( statusCode, message ) => {
    const err = new Error();
    err.statusCode = message;
    err.message = message;
    return err;
}; // custom Error
