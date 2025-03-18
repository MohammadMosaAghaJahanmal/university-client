import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.css";
import languages from "../../localization";

export default function Breadcrumb() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  let skippers = [
    'faculty',
    "about"
  ]

  return (
    <div className={[styles.breadcrumb, "w-controller"].join(" ")}>
      <Link to="/">{languages.home}</Link> {/* Always start with Home */}
      {pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const formattedSegment = segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
        let skipperIndex = skippers.findIndex(per => per.toLowerCase() === formattedSegment.trim().toLowerCase());
        return (
          <span key={index}>
            {" / "}
            {(index === pathSegments.length - 1 || skipperIndex >= 0 ) ? (
              <strong>{languages[formattedSegment?.trim()?.toLocaleLowerCase()] || formattedSegment}</strong>
            ) : (
              <Link to={path}>{languages[formattedSegment?.trim()?.toLocaleLowerCase()] || formattedSegment}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
