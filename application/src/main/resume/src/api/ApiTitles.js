import React from "react";
import {baseUrl} from "../service/BaseUrl";

import axios from "axios";

class ApiTitles {

    static getTitles() {
        return axios.get(`${baseUrl}/resume/list/titles`,
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                }
            })
    }
}

export default ApiTitles;

