import { isHTTPValidationError } from "./generalPredicates";

function isGetUserVideosSuccessResponse(data: unknown): data is GetUserVideosSuccessResponse {
	return (
		data !== null &&
		typeof data === "object" && 
		'videos' in data &&
		isArrayOfVideoObjects(data.videos)
	)
}

function isVideoObject(data: unknown): data is VideoObject {
	return (
		data !== null &&
		typeof data === 'object' &&

		"created_at" in data &&
		typeof data.created_at === 'string' &&

		"video_url" in data &&
		typeof data.video_url === 'string' &&
		
		"user_id" in data &&
		typeof data.user_id === 'string' &&
		
		"description" in data &&
		typeof data.description === 'string' &&
		
		"title" in data &&
		typeof data.title === 'string' &&
		
		"num_comments" in data &&
		typeof data.num_comments === 'number' &&
		
		"id" in data &&
		typeof data.id === 'string'
	);
}

function isArrayOfVideoObjects(data: unknown): data is VideoObject[] {
	if (!Array.isArray(data)) {
		return false;
	}

	for (const obj of data) {
		if (!isVideoObject(obj)) return false;
	}

	return true;
}

function isCreateUserVideoSuccessResponse(data: unknown): data is CreateUserVideoSuccessResponse {
	return (
		data !== null &&
		typeof data === 'object' &&
		"success" in data &&
		typeof data.success === 'string'
	)
}

function isEditUserVideoSuccessResponse(data: unknown): data is EditUserVideoSuccessResponse {
	return (
		data !== null &&
		typeof data === 'object' &&
		"success" in data &&
		typeof data.success === 'string'
	)
}

function isGetSingleVideoSuccessResponse(data: unknown): data is GetSingleVideoSuccessResponse {
	return (
		data !== null &&
		typeof data === 'object' &&
		"video" in data &&
		isVideoObject(data.video)
	)
}

export {
	isHTTPValidationError,
	isGetUserVideosSuccessResponse,
	isCreateUserVideoSuccessResponse,
	isEditUserVideoSuccessResponse,
	isGetSingleVideoSuccessResponse
}