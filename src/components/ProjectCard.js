import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, link, description, imgUrl }) => {
  const redirectToProject = () => {
    window.location.href = link;
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {link && <Button onClick={redirectToProject} className="btn btn-primary">View Project</Button>}
        </div>
      </div>
    </Col>
  );
};
