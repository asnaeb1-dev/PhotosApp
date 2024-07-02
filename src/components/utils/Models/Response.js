class Response {
    responseType;
    response;
    constructor(responseType, response) {
        this.responseType = responseType;
        this.response = response;
    }
    
    getResponseType() {
        return this.responseType;
    }
    getResponse() {
        return this.response;
    }
}

export const  ResponseType = {
    SUCCESS: "success",
    ERROR: "error",
    INFO: "info",
    LOADING: "loading",
}

export default Response;