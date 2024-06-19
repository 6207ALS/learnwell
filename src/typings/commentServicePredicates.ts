import { isHTTPValidationError } from "./generalPredicates";

function isCommentObject(data: unknown): data is CommentObject {
	return (
		data !== null &&
		typeof data === 'object' &&

		"created_at" in data &&
		typeof data.created_at === 'string' &&

		"content" in data &&
		typeof data.content === 'string' &&
		
		"user_id" in data &&
		typeof data.user_id === 'string' &&
		
		"video_id" in data &&
		typeof data.video_id === 'string' &&
		
		"id" in data &&
		typeof data.id === 'string'
	);
}


function isArrayOfCommentObject(data: unknown): data is CommentObject[] {
	if (!Array.isArray(data)) {
		return false
	}

	for (const obj of data) {
		if (!isCommentObject(obj)) return false;
	}

	return true;
}

function isGetVideoCommentsSuccessResponse(data: unknown): data is GetVideoCommentsSuccessResponse {
	return (
		data !== null &&
		typeof data === "object" && 
		'comments' in data &&
		isArrayOfCommentObject(data.comments)
	)
}

function isCreateVideoCommentSuccessResponse(data: unknown): data is CreateVideoCommentSuccessResponse {
	return (
		data !== null &&
		typeof data === 'object' &&
		"success" in data &&
		typeof data.success === 'string'
	)
}

export {
	isHTTPValidationError,
	isGetVideoCommentsSuccessResponse,
	isCreateVideoCommentSuccessResponse,
}