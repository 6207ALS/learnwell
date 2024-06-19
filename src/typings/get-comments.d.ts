type GetVideoComments = (videoID: string) => Promise<CommentObject[] | void>;

type GetVideoCommentsResponse = 
	GetVideoCommentsSuccessResponse |
	HTTPValidationError

interface GetVideoCommentsSuccessResponse {
	comments: CommentObject[]
}