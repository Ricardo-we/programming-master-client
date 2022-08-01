import BaseService from "../utils/BaseService";

const TutorialService = () => {
	const ENDPOINT = "tutorials";
	const service = new BaseService(ENDPOINT);

	const get_ = async (params, options = {}) =>
		await service.get_(params, options);
	const post = async (payload, options = {}) =>
		await service.post(payload, undefined, options);
	const put = async (payload, params, options = {}) =>
		await service.post(payload, params, options);
	const delete_ = async (params, options = {}) =>
		await service.delete_(params, options);

	return { get_, post, put, delete_ };
};
export default TutorialService;
