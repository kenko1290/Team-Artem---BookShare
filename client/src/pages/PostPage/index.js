//import classes from "./PostPage.module.css";
import NewNav from "../../components/Navbar";
import PostBookForm from "./PostBookForm";

function PostPage() {
	return (
		<div>
			<NewNav />
			<div class="container-fluid">
				<div class="row mb-4">
					
					<div
						class="col border border-dark border-bottom-0 border-top-0 border-bottom-right-0"
						style={{ paddingLeft: "50px", paddingTop: "20px" }}
					>
						{<PostBookForm />}
					</div>
				</div>
			</div>
		</div>
	);
}
export default PostPage;
