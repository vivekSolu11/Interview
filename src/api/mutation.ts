import { apiRequest } from "@/utils/apiHelpers"

const createUser = async (
	payload: Record<string, string | number | object>
) => {
	return await apiRequest({
		url: '/user',
		method: "POST",
		payload
	})
}

export {createUser}