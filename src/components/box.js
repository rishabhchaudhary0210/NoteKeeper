

export default function Box({ post, handleDeleteClick }) {
    // const colorArray = ['#96FF96', '#FFB9F0', '#B3EBEB'];
    const colorArray = ['#ffc09f', '#ffee93', '#fcf5c7', '#a0ced9', '#adf7b6'];

    function handleEditClick() {
        console.log("Edit Button Clicked");
    }
    function handleBigClick() {
        console.log("Big button clicked");
    }
    return (
        // <div className="postBox" style={{ backgroundColor: colorArray[(post.id) % 3] }}>
        <div className="postBox" style={{ backgroundColor: colorArray[Math.floor(Math.random() * 5)] }}>
            <h1 className="postHead"> {post.title}
                <div className="utilBox">
                    <button className="editBtn utilBtn" onClick={handleEditClick}>
                        <span class="material-symbols-outlined">edit</span>
                    </button>
                    <button className="deleteBtn utilBtn" onClick={() => handleDeleteClick(post)}>
                        <span class="material-symbols-outlined">delete</span>
                    </button>
                    <button className="deleteBtn utilBtn" onClick={() => handleBigClick()}>
                        <span class="material-symbols-outlined">open_in_full</span>
                    </button>
                </div>
            </h1>
            <p className="postContent"> {post.content} </p>
        </div>
    );
}