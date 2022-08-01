import { useLayoutEffect, useState } from "react"
import { toast } from "react-toastify";

/*@ methods, get_, post, put, delete_ */

function useService(service, { payload, params, config }) {
    const [data, setData] = useState(null);

    useLayoutEffect(() => {
        service(params, payload, params, config)
            .then(res => setData(res.data))
            .catch(error => toast.error(error.response?.data?.error?.message))
    }, [params, config, payload]);

    return [data, setData];
}
;

export default useService;