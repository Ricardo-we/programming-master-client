import BaseService from "../utils/BaseService";
import axios from "axios";

const ProgrammingLanguagesService = () => {
	const ENDPOINT = "programming-languages";
	const service = new BaseService(ENDPOINT);

	const get_ = async (params, options = {}) => {
		return await service.get_(params, options);
	};
	const getProgrammingLanguageGuides = async (params, options) => {
		return await axios.get(`${service.endpoint}/${params}/guides`, options);
	};
	const post = async (payload, options = {}) => {
		return await service.post(payload, undefined, options);
	};
	const put = async (payload, params, options = {}) => {
		return await service.post(payload, params, options);
	};
	const delete_ = async (params, options = {}) => {
		return await service.delete_(params, options);
	};
	return { get_, post, put, delete_, getProgrammingLanguageGuides };
};
export default ProgrammingLanguagesService;
