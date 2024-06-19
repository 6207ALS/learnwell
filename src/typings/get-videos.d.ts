type GetUserVideos = (userID: string) => Promise<VideoObject[] | void>

type GetUserVideosResponse = 
	GetUserVideosSuccessResponse | 
	HTTPValidationError;

interface GetUserVideosSuccessResponse {
	videos: VideoObject[]
}

