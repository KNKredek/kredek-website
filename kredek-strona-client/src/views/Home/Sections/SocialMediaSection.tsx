import { useEffect } from "react";
export default function SocialMediaSection(){

    useEffect(() => {
        const src = "https://elfsightcdn.com/platform.js";
        if (document.querySelector(`script[src="${src}"]`)) return;

        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return(
        <div className="socialMediaSection">
            <div className="socialMediaSectionInner">
                <div className="socialMediaSectionTitle">
                    AKTUALNOŚCI
                </div>
                <div>
                    Co u nas nowego?
                </div>
                <div
                    className="posts elfsight-app-b2b50e20-1905-4179-804f-56acde2e1f48"
                    data-elfsight-app-lazy
                />
            </div>
        </div>
    )
}