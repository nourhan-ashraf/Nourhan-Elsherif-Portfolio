import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from '../components/myWork/myWork.json'
import ProjectBio from "../components/projectBio/ProjectBio";
import Error from "./Error404";
import Footer from '../components/Footer/Footer'
import WorkNav from "../components/navBar/WorkNav";
import '../App.css'
import { DarkModeContext } from "../context/ThemeContext";

const Project = () => {
    const {darkMode} = useContext(DarkModeContext)
    const { id } = useParams();
    const [isError, setIsError] = useState(true);
    const projectParams = data.find((i) => i.id == id);
    console.log(projectParams)
    useEffect(() => {
        setIsError(projectParams === undefined);
    }, [projectParams]);

    return (
        <div className={darkMode ? "homeBgDark" : ""}>
            <WorkNav />
            {!isError ? (
                <ProjectBio
                    params={{
                        id: projectParams.id,
                        name: projectParams.name,
                        subTitle: projectParams.subTitle,
                        desc: projectParams.description,
                        myPart: projectParams.myPart,
                        tech: projectParams.technologies,
                        demo: projectParams.demo,
                        img: projectParams.img,
                        logo: projectParams.logo,
                        link: projectParams.link,
                        web: projectParams.website,
                    }}
                />
            ) : (
                <Error />
            )}
            <Footer />
        </div>
    )
}
export default Project