import BaseService from "../utils/BaseService";

const AppTranslationsService = () => {
	const ENDPOINT = "app-translations";
	const service = new BaseService(ENDPOINT);

	const get_ = async (params, options = {}) => {
		return await service.get_(params, options);
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
	return { get_, post, put, delete_ };
};

export default AppTranslationsService;
