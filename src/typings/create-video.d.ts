type CreateUserVideo = (videoData: CreateVideo) => Promise<CreateUserVideoResponse | void>;

type CreateUserVideoResponse = 
	CreateUserVideoSuccessResponse | 
	HTTPValidationError;

interface CreateUserVideoSuccessResponse {
	success: string;
}

interface CreateVideo {
	user_id: string;
	description: string;
	video_url: string;
	title: string;
}