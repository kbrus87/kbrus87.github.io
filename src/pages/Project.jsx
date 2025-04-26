import { useContext, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/Context";
import AwesomSpinner from "../components/AwesomSpinner";
import ContentBlock from "../components/ContentBlock";
import DownloadCard from "../components/DownloadCard";

export default function ProjectContent() {

    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);

    const { getContent, setLoadingFalseWithDelay, api } = useContext(MyContext);
    const { project_id } = useParams();


    useEffect(() => {
        getContent(project_id).then((res) => {
            if (res.status > 400) {
                console.error("Error fetching content:", res);
                return;
            }
            setContent(res);
            setLoadingFalseWithDelay(setLoading);
        })
    }, [getContent, project_id]);

    return <>{loading ? <AwesomSpinner /> :
        <>  {content.map((item) => {
            return <ContentBlock key={item.id} type={item.type} content={item.content} meta={item.meta} projectContent={item.projectContent} />
        })}
            <DownloadCard project={content[0]?.project} download={api + `/projects/${project_id}/download`} /></>
    }</>
} 