export default function SocialMediaSection(){
    return(
        <div className="socialMediaSection">
            <div className="socialMediaSectionInner">
                <h2>AKTUALNOŚCI</h2>
                <p>Co u nas nowego?</p>
                <div className="posts">
                    {POSTS.map(url => (
                        <iframe src={url} height="670" width="504" title="Osadzona publikacja"></iframe>
                    ))}
                </div>
            </div>
        </div>
    )
}

const POSTS = [
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7521329563944226817?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7521329563944226817?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7521329563944226817?collapsed=1"
]