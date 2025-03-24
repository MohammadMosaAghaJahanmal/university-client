import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.css";
import languages from "../../localization";

export default function Breadcrumb() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  let skippers = [
    'faculty',
    "about",
    "kankor",
    "student",


  ]

  let removePaths = [
    'multipleimgs',
    "posts",
    "pdc",
    "faculty",
    "academic",
    "research",
    "quality",
    "international",
    "internal",
    "national",
    "library",
    "institutions",
    "students",
    "alumni",
    "about",
  ]
  
  let goBack = [
    "councils_and_committees",
    "news",
    "libraryinfos",
    "achievements",
    "aggrements",
    "labs",
    "a_pdc",
    "societies",
    "teachers",
    "administrative_staff",
    "pdc_student",
    "research_papers_and_publication",
    "research_trainings",
    "publishedresearches",
    "activity",
    "alumni_support_services",
  ]

  return (
    <div className={[styles.breadcrumb, "w-controller"].join(" ")}>
      <Link to="/">{languages.home}</Link> {/* Always start with Home */}
      {pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const formattedSegment = segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

        let removeIndex = removePaths.findIndex(per => (per.toLowerCase() === formattedSegment.trim().toLowerCase() || (formattedSegment.length === 24 && formattedSegment.search(/\d/ig) >= 0)));
        if(removeIndex >= 0)
          return null
        let skipperIndex = skippers.findIndex(per => per.toLowerCase() === formattedSegment.trim().toLowerCase());
        let isGoBack = goBack.findIndex(per => per.toLowerCase() === formattedSegment.trim().toLowerCase());
        return (
          <span key={index}>
            {" / "}
            {(index === pathSegments.length - 1 || skipperIndex >= 0 ) ? (
              <strong>{languages[formattedSegment?.trim()?.toLocaleLowerCase()] || formattedSegment}</strong>
            ) : (
            isGoBack >= 0 ? 
              <>
                <Link to={"#"} onClick={(e) => {
                  e.preventDefault()
                  window.history.back()
                  }}>{languages[formattedSegment?.trim()?.toLocaleLowerCase()] || formattedSegment}</Link>
                {" / "}
                <strong>{languages.post}</strong>
              </>
              :
              <Link to={path}>{languages[formattedSegment?.trim()?.toLocaleLowerCase()] || formattedSegment}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
