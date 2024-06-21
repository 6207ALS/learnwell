const BASE_URL = `/api/videos`;

import { 
	isHTTPValidationError,
	isGetUserVideosSuccessResponse,
	isCreateUserVideoSuccessResponse,
	isEditUserVideoSuccessResponse,
	isGetSingleVideoSuccessResponse,
} from "../typings/videoServicePredicates"

const getUserVideos: GetUserVideos = async (userID: string): Promise<VideoObject[] | void> => {
	try {
		const response = await fetch(`${BASE_URL}?user_id=${userID}`, {
			headers: { "Accept": "application/json" }
		});
		const data = await response.json();

		if (isGetUserVideosSuccessResponse(data)) {
			return data.videos;
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

const createUserVideo: CreateUserVideo = async (videoData: CreateVideo): Promise<CreateUserVideoResponse | void> => {
	try {
		const response = await fetch(`${BASE_URL}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(videoData)
		});
		const data = await response.json();

		if (isCreateUserVideoSuccessResponse(data)) {
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

const editUserVideo: EditUserVideo = async (videoData: EditVideo): Promise<EditUserVideoSuccessResponse | void> => {
	try {
		const response = await fetch(`${BASE_URL}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(videoData)
		});
		const data = await response.json();

		if (isEditUserVideoSuccessResponse(data)) {
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

const getSingleVideo: GetSingleVideo = async (videoID: string): Promise<VideoObject | void> => {
	try {
		const response = await fetch(`${BASE_URL}/single?video_id=${videoID}`);
		const data = await response.json();

		if (isGetSingleVideoSuccessResponse(data)) {
			return data.video;
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
	getUserVideos,
	createUserVideo,
	editUserVideo,
	getSingleVideo,
}