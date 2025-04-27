import { useContext } from "react";
import { MyContext } from "../context/Context";

export default function ContentBlock({ type, content, meta, projectContent }) {

    const { api } = useContext(MyContext);
    return <div className={meta.className + ` mb-5 `} style={meta.style}>{projectContent.sort((a, b) => a.order - b.order).map((item) => {
        const itemMeta = item.meta ?? {}

        switch (item.type) {
            case "text":
                return <p key={item.id} style={Object.assign({}, itemMeta.style, { whiteSpace: "pre-line" })} className={itemMeta.className} dangerouslySetInnerHTML={{ __html: item.content }}></p>;
            case "image":
                return <img key={item.id} style={itemMeta.style} src={api + item.content} className={itemMeta.className} />; //className="w-full h-auto"
            case "video":
                return <iframe key={item.id} src={item.content} style={itemMeta.style} className={itemMeta.className} />; //className="w-full h-auto"
            case "audio":
                return <audio key={item.id} controls src={item.content} />;
            case "block":
                return <ContentBlock key={item.id} type={item.type} content={item.content} meta={item.meta} projectContent={item.projectContent} className={itemMeta.className} />
            default:
                return null;
        }
    })}
    </div>
}


