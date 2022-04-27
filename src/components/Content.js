import Description from "./Description";

const Content = (props) => {
  return (
    <div>
      <Description
        jobtitle={props.jobtitle}
        contractType={props.contractType}
        country={props.country}
        city={props.city}
      />
    </div>
  );
};

export default Content;
