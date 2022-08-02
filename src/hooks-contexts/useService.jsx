import { useLayoutEffect, useState } from "react"
import { toast } from "react-toastify";

/*@ methods, get_, post, put, delete_ */

function useService(service, { params_payload, config }) {
    const [data, setData] = useState(null);

    useLayoutEffect(() => {
        service(params_payload, config)
            .then(res => setData(res.data))
            .catch(error => toast.error(error.response?.data?.error?.message))
    }, []);

    return [data, setData];
};

export default useService;