let nextId = 1;

export default function NewPost({ onAddPost, onClose }) {
    function handleSubmitClick(e) {
        e.preventDefault();
        let nextPost = {
            id: nextId++,
            title: e.target.title.value,
            content: e.target.content.value
        };

        e.target.title.value = '';
        e.target.content.value = '';
        onAddPost(nextPost);
        onClose();
    }

    return (
        <>
            <div className="formBox">
                <button className="close" onClick={onClose} ><span class="material-symbols-outlined">
close
</span></button>
                <form action="#" onSubmit={handleSubmitClick} id='newPostForm'>
                    <label htmlFor="title" id="titleLabel">Title:
                        <input type="text" placeholder="Enter Title" id="title" name="title" />
                    </label>
                    <label htmlFor="content" id="contentLabel">Content:
                        <textarea name="content" id="content" cols="30" rows="10" placeholder="Enter Content Here" ></textarea>
                    </label>
                    <button className="submitBtn" type="submit" onClick={() => { console.log("Submitted") }}>Submit</button>
                </form>
            </div>
        </>
    )
}
