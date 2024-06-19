type EditUserVideo = (videoData: EditVideo) => Promise<EditUserVideoSuccessResponse | void>;

type EditUserVideoResponse = 
	EditUserVideoSuccessResponse | 
	HTTPValidationError;

interface EditUserVideoSuccessResponse {
	success: string;
}

interface EditVideo {
	video_id: string;
	title: string;
	description: string;
}