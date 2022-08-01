import BaseService from "../utils/BaseService";
import axios from "axios";

const AdminService = (authToken) => {
	const ENDPOINT = "admin";
	const service = new BaseService(ENDPOINT);
	const headers = { "X-Authorization": authToken };

	const get_ = async (params, options = {}) => {
		return await service.get_(params, { ...options, headers });
	};

	const post = async (payload, options = {}) => {
		return await service.post(payload, undefined, { ...options, headers });
	};

	const put = async (payload, params, options = {}) => {
		return await service.put(payload, params, { ...options, ...headers });
	};

	const delete_ = async (params, options = {}) => {
		return await service.delete_(params, { ...options, ...headers });
	};
	return { get_, post, put, delete_ };
};

export default AdminService;
