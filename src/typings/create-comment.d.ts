type CreateVideoComment = (commentData: CreateComment) => Promise<CreateVideoCommentSuccessResponse| void>;

type CreateVideoCommentResponse = 
	CreateUserVideoSuccessResponse | 
	HTTPValidationError;

interface CreateVideoCommentSuccessResponse {
	success: string;
}

interface CreateComment {
	video_id: string;
	content: string;
	user_id: string;
}