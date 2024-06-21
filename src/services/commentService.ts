const BASE_URL = `/api/videos`;

import { 
	isHTTPValidationError,
	isGetVideoCommentsSuccessResponse,
	isCreateVideoCommentSuccessResponse,
} from "../typings/commentServicePredicates"

const getVideoComments: GetVideoComments = async (videoID: string): Promise<CommentObject[] | void> => {
	try {
		const response = await fetch(`${BASE_URL}/comments?video_id=${videoID}`, {
			headers: { "Accept": "application/json" }
		});
		const data = await response.json();

		if (isGetVideoCommentsSuccessResponse(data)) {
			return data.comments;
		} else if (isHTTPValidationError(data)) {
			throw new Error(`Error ${response.status}: ${data.detail}`)
		} else {
			throw new Error(`Error ${response.status}`);
		}
	} catch (e: unknown) {
		if (e instanceof Error) {
			throw new Error(e.message);
		}
	}
}

const createVideoComment: CreateVideoComment = async (commentData: CreateComment): Promise<CreateUserVideoSuccessResponse | void> => {
	try {
		const response = await fetch(`${BASE_URL}/comments`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(commentData)
		});
		const data = await response.json();

		if (isCreateVideoCommentSuccessResponse(data)) {
			return data;
		} else if (isHTTPValidationError(data)) {
			throw new Error(`Error ${response.status}: ${data.detail}`)
		} else {
			throw new Error(`Error ${response.status}`);
		}
	} catch (e: unknown) {
		if (e instanceof Error) {
			throw new Error(e.message);
		}
	}
}

export default {
	getVideoComments,
	createVideoComment,
}