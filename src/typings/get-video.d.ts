type GetSingleVideo = (videoID: string) => Promise<VideoObject | void>

type GetSingleVideoResponse = 
	GetSingleVideoSuccessResponse | 
	HTTPValidationError;

interface GetSingleVideoSuccessResponse {
	video: VideoObject
}