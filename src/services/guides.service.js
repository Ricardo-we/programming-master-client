import BaseService from "../utils/BaseService";
import axios from "axios";

const GuidesService = () => {
	const ENDPOINT = "guides";
	const service = new BaseService(ENDPOINT);

	const get_ = async (params, options = {}) =>
		await service.get_(params, options);
	const getGuideTutorials = async (params, options = {}) => {
		return await axios.get(
			`${service.endpoint}/${params}/tutorials`,
			options,
		);
	};
	const post = async (payload, options = {}) =>
		await service.post(payload, undefined, options);
	const put = async (payload, params, options = {}) =>
		await service.post(payload, params, options);
	const delete_ = async (params, options = {}) =>
		await service.delete_(params, options);

	return { get_, post, put, delete_, getGuideTutorials };
};
export default GuidesService;
