interface VideoObject {
	user_id: string;
  description: string;
  video_url: string;
  title: string;
}

interface UserAction {
	type: "login" | "logout" | "set-videos";
	userID?: string;
	videos?: VideoObject[];
}

interface UserState {
	isLoggedIn: boolean;
	userID?: string;
	videos?: VideoObject[];
}

interface AppContext {
	user: UserState;
	setUser: React.Dispatch<UserAction>;
	handleLogout: () => void;
	handleLogin: (userID: string) => void;
}

interface PostCommentFormProps {
	handleCreateComment: (commentData: string) => void;
}

interface VideosProps {
	videos: VideoObject[];
	handleClickEditVideo: (video: VideoObject) => void;
}

interface VideoCardProps {
	video: VideoObject;
	canEdit: boolean;
	handleClickEditVideo: (video: VideoObject) => void;
}

interface EditVideoModalProps {
	video: VideoObject;
	handleEditVideo: (videoData: EditVideo) => Promise<void>;
	dispatchEditModal: React.Dispatch<EditModalAction>;
}

type UserReducer = (state: UserState, action: UserAction) => UserState;


// GENERAL RESPONSE TYPES
type HTTPResponse = HTTPSuccessResponse | HTTPValidationError;

interface HTTPValidationError {
	detail: Item[];
}

interface Item {
	loc: (string | number)[];
	msg: string,
	type: string,
	input?: {
		video_id?: string;
		description?: string;
		title: string;
	}
}

interface VideoObject {
	created_at: string;
	video_url: string;
	user_id: string;
	description: string;
	title: string;
	num_comments: number;
	id: string;
}

interface CommentObject {
	created_at: string;
	content: string;
	user_id: string;
	video_id: string;
	id: string;
}




