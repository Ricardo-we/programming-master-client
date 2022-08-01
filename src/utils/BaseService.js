import axios from "axios";

export default class BaseService {
	constructor(endpointName) {
		this.BASE_URL = process.env.API_URL || "http://localhost:5005";
		this.endpoint = `${this.BASE_URL}/${endpointName}`;
	}

	async get_(params = "", config) {
		return await axios.get(
			`${this.endpoint}${params ? "/" + params : ""}`,
			config,
		);
	}

	async post(payload, params = "", config) {
		console.log(this.BASE_URL, this.endpoint);
		return await axios.post(
			`${this.endpoint}${params ? "/" + params : ""}`,
			payload,
			config,
		);
	}

	async put(payload, params = "", config) {
		return await axios.put(
			`${this.endpoint}${params ? "/" + params : ""}`,
			payload,
			config,
		);
	}

	async delete_(params = "", config) {
		return await axios.delete(
			`${this.endpoint}${params ? "/" + params : ""}`,
			config,
		);
	}
}

export const errorResponseHandlers = {
	response: (error) => error?.response?.data,
	status: (error) => error?.response?.status,
	headers: (error) => error?.response?.headers,
};
