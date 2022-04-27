import Title from "./Title";

const Description = (props) => {
  return (
    <div className="description-job">
      <Title jobtitle={props.jobtitle} />
      {props.contractType} - {props.country} - {props.city}
    </div>
  );
};

export default Description;
